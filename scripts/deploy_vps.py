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
    host = os.environ.get("VPS_HOST", "66.29.152.229")
    port = int(os.environ.get("VPS_PORT", "2226"))
    user = os.environ.get("VPS_USERNAME", "jose")
    password = os.environ.get("VPS_PASSWORD", "")
    target_dir = os.environ.get("VPS_TARGET_DIR", "")
    gh_token = os.environ.get("GH_TOKEN", "")

    if not password:
        print("ERROR: VPS_PASSWORD environment variable is empty.")
        sys.exit(1)

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

    # Check candidate directories
    candidates = [
        target_dir,
        "/opt/stacks/tiva",
        "/home/jose/tivatci",
        "/home/jose/apps/tiva",
        "/home/jose/apps/tivataller",
        "/var/www/tivatci"
    ]

    detected_dir = None
    for c in candidates:
        if not c:
            continue
        code, out, _ = run_cmd(ssh, f"test -d {c} && echo EXISTS || true")
        if "EXISTS" in out:
            detected_dir = c
            print(f"Found active directory: {detected_dir}")
            break

    if not detected_dir:
        detected_dir = "/home/jose/apps/tiva"
        print(f"No existing directory found, creating: {detected_dir}")
        run_cmd(ssh, f"mkdir -p {detected_dir}")

    # Check git setup in detected_dir
    code, out, _ = run_cmd(ssh, f"test -d {detected_dir}/.git && echo GIT_EXISTS || true")
    auth_url = f"https://x-access-token:{gh_token}@github.com/vonpeper/tivatci.git" if gh_token else "https://github.com/vonpeper/tivatci.git"

    if "GIT_EXISTS" not in out:
        print(f"Cloning repository into {detected_dir}...")
        run_cmd(ssh, f"git clone {auth_url} {detected_dir}")
    else:
        print(f"Updating repository in {detected_dir}...")
        run_cmd(ssh, f"cd {detected_dir} && git remote set-url origin {auth_url} && git fetch origin main && git reset --hard origin/main && git remote set-url origin https://github.com/vonpeper/tivatci.git")

    # Deploy via Docker Compose if docker exists and docker-compose.yml exists
    code, out, _ = run_cmd(ssh, f"test -f {detected_dir}/docker-compose.yml && command -v docker && echo DOCKER_READY || true")
    if "DOCKER_READY" in out:
        print("Deploying using Docker Compose...")
        run_cmd(ssh, f"cd {detected_dir} && docker compose up -d --build --force-recreate && docker image prune -f")
    else:
        # Fallback to PM2 / Node
        print("Deploying using npm build and PM2...")
        run_cmd(ssh, f"cd {detected_dir} && npm install && npm run build")
        run_cmd(ssh, f"cd {detected_dir} && (pm2 reload tiva || pm2 restart tiva || pm2 start npm --name 'tiva' -- start || true)")

    print("\nDespliegue completado con exito en tivataller.com!")
    ssh.close()

if __name__ == "__main__":
    deploy()
