# 📥 Instruções de Download e Setup Local

## 1️⃣ Download do Projeto

### Opção A: Download via Manus (Recomendado)
1. Clique em **"Code"** no painel de gerenciamento
2. Clique em **"Download all files"**
3. Extraia o arquivo ZIP em seu computador

### Opção B: Clone via Git
```bash
git clone https://github.com/seu-usuario/portfolio-dev-pro.git
cd portfolio-dev-pro
```

## 2️⃣ Pré-requisitos

Instale em seu computador:

### Windows
1. **Node.js**: https://nodejs.org/ (escolha LTS)
2. **pnpm**: Abra PowerShell como Admin e execute:
   ```powershell
   npm install -g pnpm
   ```

### macOS
```bash
# Instale Homebrew se não tiver
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instale Node.js
brew install node

# Instale pnpm
npm install -g pnpm
```

### Linux (Ubuntu/Debian)
```bash
# Instale Node.js
sudo apt update
sudo apt install nodejs npm

# Instale pnpm
npm install -g pnpm
```

## 3️⃣ Setup Local

### Passo 1: Abra o Terminal/PowerShell

**Windows**: Pressione `Win + R`, digite `cmd` e pressione Enter

**macOS/Linux**: Abra o Terminal

### Passo 2: Navegue até a pasta do projeto
```bash
cd caminho/para/portfolio-dev-pro
```

### Passo 3: Instale as dependências
```bash
pnpm install
```

Isso pode levar 2-5 minutos na primeira vez.

### Passo 4: Rode o servidor
```bash
pnpm dev
```

Você verá algo como:
```
➜  Local:   http://localhost:3000/
```

### Passo 5: Abra no navegador
Clique no link ou acesse: **http://localhost:3000**

## ✅ Pronto!

Você agora tem o portfólio rodando localmente. 

## 🎨 Próximos Passos

1. **Personalize** o conteúdo (veja `SETUP.md`)
2. **Teste** as animações e interações
3. **Faça alterações** e veja em tempo real
4. **Quando pronto**, faça o deploy (veja seção abaixo)

## 🚀 Deploy

### Opção 1: Vercel (Mais Fácil)

1. Crie uma conta em https://vercel.com
2. Faça login
3. Clique em "New Project"
4. Selecione seu repositório GitHub
5. Clique em "Deploy"
6. Pronto! Seu site está online

### Opção 2: Netlify

1. Crie uma conta em https://netlify.com
2. Clique em "New site from Git"
3. Selecione seu repositório
4. Configurações já estão prontas em `netlify.toml`
5. Clique em "Deploy"

### Opção 3: GitHub Pages

1. Vá para Settings do seu repositório
2. Selecione "Pages"
3. Escolha "Deploy from a branch"
4. Selecione `main` e pasta `dist`
5. Aguarde o deploy automático

## 🆘 Problemas Comuns

### "pnpm: command not found"
```bash
npm install -g pnpm
```

### "Porta 3000 já está em uso"
```bash
pnpm dev -- --port 3001
```

### "npm ERR! code ERESOLVE"
```bash
pnpm install --force
```

### Arquivo não salva/não atualiza
Pressione `Ctrl + C` para parar o servidor e execute `pnpm dev` novamente.

## 📚 Documentação

- **Setup Completo**: Veja `SETUP.md`
- **Informações do Projeto**: Veja `README.md`
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com

## 💡 Dicas

- Use `Ctrl + Shift + I` (ou `F12`) para abrir o DevTools
- Edite qualquer arquivo em `client/src/` e veja as mudanças em tempo real
- Não edite arquivos em `dist/` - eles são gerados automaticamente
- Sempre faça `pnpm build` antes de fazer deploy

## ✨ Sucesso!

Agora você tem um portfólio profissional rodando localmente e pronto para impressionar recrutadores! 🎉

Dúvidas? Consulte a documentação ou os links acima.
