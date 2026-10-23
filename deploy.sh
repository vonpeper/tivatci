#!/usr/bin/env bash
# ==============================================================================
# Script de Despliegue Oficial en VPS (propodvps1) para TIVA México
# Dominio: https://tivataller.com
# Servidor: 66.94.114.222:2226
# ==============================================================================
set -e

VPS_HOST="${VPS_HOST:-66.94.114.222}"
VPS_PORT="${VPS_PORT:-2226}"
VPS_USER="${VPS_USER:-jose}"
SUDO_PASS="BvJhdx2S77NOv3Oqx62UwsX/"

echo "🚀 [1/4] Conectando a $VPS_HOST:$VPS_PORT para actualizar tivataller.com..."

ssh -p "$VPS_PORT" -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" "
  echo '$SUDO_PASS' | sudo -S bash -c '
    set -e
    echo \"📥 [2/4] Actualizando repositorio en /opt/stacks/tiva/src...\"
    cd /opt/stacks/tiva/src
    git fetch origin main
    git reset --hard origin/main
    SHA=\$(git rev-parse --short HEAD)
    echo \"Desplegando Commit SHA: \$SHA\"

    echo \"🐳 [3/4] Construyendo imagen de producción con Podman...\"
    podman build --build-arg GIT_SHA=\$SHA -f /opt/stacks/tiva/Dockerfile -t localhost/tiva-web:sha-\$SHA /opt/stacks/tiva/src

    echo \"⚙️ [4/4] Actualizando servicio y reiniciando tiva-web...\"
    sed -i \"s|^Image=.*|Image=localhost/tiva-web:sha-\$SHA|\" /etc/containers/systemd/tiva-web.container
    /usr/libexec/podman/quadlet -dryrun >/dev/null
    systemctl daemon-reload
    systemctl restart tiva-web
    sleep 3
    podman ps --filter name=tiva-web
    echo \"✅ ¡Despliegue finalizado exitosamente en https://tivataller.com!\"
  '
"
