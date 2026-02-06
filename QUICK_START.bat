@echo off
REM Dev Portfolio Pro - Quick Start Script (Windows)
REM Este script automatiza o setup inicial

echo.
echo 🚀 Dev Portfolio Pro - Quick Start
echo ==================================
echo.

REM Verificar se Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js não está instalado!
    echo 📥 Baixe em: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js encontrado: %NODE_VERSION%

REM Verificar se pnpm está instalado
where pnpm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  pnpm não está instalado. Instalando...
    call npm install -g pnpm
)

for /f "tokens=*" %%i in ('pnpm --version') do set PNPM_VERSION=%%i
echo ✅ pnpm encontrado: %PNPM_VERSION%
echo.

REM Instalar dependências
echo 📦 Instalando dependências...
call pnpm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro ao instalar dependências
    pause
    exit /b 1
)

echo.
echo ✅ Dependências instaladas com sucesso!
echo.
echo 🎉 Setup completo!
echo.
echo Para rodar o servidor de desenvolvimento:
echo   pnpm dev
echo.
echo Para fazer build para produção:
echo   pnpm build
echo.
echo Para mais informações, veja SETUP.md
echo.
pause
