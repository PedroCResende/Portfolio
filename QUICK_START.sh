#!/bin/bash

# Dev Portfolio Pro - Quick Start Script
# Este script automatiza o setup inicial

echo "🚀 Dev Portfolio Pro - Quick Start"
echo "=================================="
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo "📥 Baixe em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"

# Verificar se pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo "⚠️  pnpm não está instalado. Instalando..."
    npm install -g pnpm
fi

echo "✅ pnpm encontrado: $(pnpm --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
pnpm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

echo ""
echo "✅ Dependências instaladas com sucesso!"
echo ""
echo "🎉 Setup completo!"
echo ""
echo "Para rodar o servidor de desenvolvimento:"
echo "  pnpm dev"
echo ""
echo "Para fazer build para produção:"
echo "  pnpm build"
echo ""
echo "Para mais informações, veja SETUP.md"
