#!/usr/bin/env bash
# Script de Despliegue en VPS para TIVA / tivataller.com
set -e

echo "🚀 Iniciando despliegue de TIVA..."

# Obtener los últimos cambios de main
echo "📥 Git Pull..."
git reset --hard
git pull origin main

# Instalar dependencias
echo "📦 Instalando dependencias npm..."
npm install

# Compilar producción Next.js
echo "🔨 Compilando Next.js..."
npm run build

# Reiniciar servicio
echo "🔄 Reiniciando aplicación..."
if command -v pm2 &> /dev/null; then
  pm2 reload tiva || pm2 restart tiva || pm2 start npm --name "tiva" -- start || pm2 restart all
  echo "✅ PM2 recargado con éxito."
elif systemctl list-units --type=service | grep -q tiva; then
  sudo systemctl restart tiva
  echo "✅ Servicio systemd reiniciado con éxito."
else
  echo "⚠️ Advertencia: Configura PM2 o Systemd para servir la app en segundo plano."
fi

echo "🎉 Despliegue finalizado con éxito."
