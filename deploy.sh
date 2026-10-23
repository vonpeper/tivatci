#!/usr/bin/env bash
# Script de Despliegue en VPS para TIVA / tivataller.com
set -e

echo "🚀 Iniciando despliegue de TIVA..."

# 1. Obtener los últimos cambios de main
echo "📥 Git Pull..."
git reset --hard
git pull origin main

# 2. Despliegue según el entorno
if [ -f "docker-compose.yml" ] && command -v docker &> /dev/null; then
  echo "🐳 Desplegando contenedor Docker..."
  docker compose up -d --build --force-recreate
  docker image prune -f
elif command -v pm2 &> /dev/null; then
  echo "📦 Instalando dependencias npm..."
  npm install
  echo "🔨 Compilando Next.js..."
  npm run build
  echo "🔄 Reiniciando proceso PM2..."
  pm2 reload tiva || pm2 restart tiva || pm2 start npm --name "tiva" -- start || pm2 restart all
elif systemctl list-units --type=service 2>/dev/null | grep -q tiva; then
  echo "📦 Instalando dependencias npm..."
  npm install
  echo "🔨 Compilando Next.js..."
  npm run build
  echo "🔄 Reiniciando systemd service..."
  sudo systemctl restart tiva || true
else
  echo "📦 Instalando dependencias npm..."
  npm install
  echo "🔨 Compilando Next.js..."
  npm run build
fi

echo "🎉 Despliegue finalizado con éxito en https://tivataller.com"
