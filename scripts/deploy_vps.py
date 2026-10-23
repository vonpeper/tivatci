import os
import sys
import paramiko

def run_cmd(ssh, cmd):
    print(f"\n$ {cmd}")
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore')
    err = stderr.read().decode('utf-8', errors='ignore')
    if out:
        print(out, end='')
    if err:
        print(err, end='', file=sys.stderr)
    exit_status = stdout.channel.recv_exit_status()
    if exit_status != 0:
        print(f"Command exited with status {exit_status}")
    return exit_status, out, err

def deploy():
    host = os.environ.get("VPS_HOST", "66.94.114.222")
    port = int(os.environ.get("VPS_PORT", "2226"))
    user = os.environ.get("VPS_USERNAME", "jose")
    password = os.environ.get("VPS_PASSWORD", "BvJhdx2S77NOv3Oqx62UwsX/")
    sudo_pass = os.environ.get("SUDO_PASS", password)

    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    print(f"Connecting to VPS {host}:{port} as {user}...")
    try:
        ssh.connect(
            hostname=host,
            port=port,
            username=user,
            password=password,
            look_for_keys=False,
            allow_agent=False,
            timeout=30
        )
    except Exception as e:
        print(f"ERROR connecting to VPS: {e}")
        sys.exit(1)

    print("Connected successfully to VPS via SSH!")

    deploy_cmd = f"""echo '{sudo_pass}' | sudo -S bash -c '
set -e
cd /opt/stacks/tiva/src
git fetch origin main
git reset --hard origin/main
SHA=$(git rev-parse --short HEAD)
echo "Building podman image for sha-$SHA..."
podman build --build-arg GIT_SHA=$SHA -f /opt/stacks/tiva/Dockerfile -t localhost/tiva-web:sha-$SHA /opt/stacks/tiva/src
sed -i "s|^Image=.*|Image=localhost/tiva-web:sha-$SHA|" /etc/containers/systemd/tiva-web.container
/usr/libexec/podman/quadlet -dryrun >/dev/null
systemctl daemon-reload
systemctl restart tiva-web
sleep 3
podman ps --filter name=tiva-web
echo "DEPLOY_SUCCESS"
'"""

    code, out, err = run_cmd(ssh, deploy_cmd)
    if code != 0 or "DEPLOY_SUCCESS" not in out:
        print("Deployment failed.")
        sys.exit(1)

    print("\nDespliegue finalizado con exito en https://tivataller.com!")
    ssh.close()

if __name__ == "__main__":
    deploy()
