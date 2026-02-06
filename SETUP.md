# Dev Portfolio Pro - Guia de Setup e Deploy

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v18 ou superior) - [Download](https://nodejs.org/)
- **pnpm** (v10 ou superior) - Instale com: `npm install -g pnpm`
- **Git** (opcional, mas recomendado) - [Download](https://git-scm.com/)

## 🚀 Instalação Local

### 1. Extrair o projeto
```bash
# Se recebeu um arquivo ZIP, extraia-o
unzip portfolio-dev-pro.zip
cd portfolio-dev-pro
```

### 2. Instalar dependências
```bash
pnpm install
```

### 3. Rodar o servidor de desenvolvimento
```bash
pnpm dev
```

O site estará disponível em: **http://localhost:3000**

## 🎨 Personalização

### Editar informações pessoais

**Navbar e Hero:**
- Arquivo: `client/src/components/Navbar.tsx`
- Altere o nome "Dev.Pro" para seu nome
- Atualize os links de redes sociais

**Seção About:**
- Arquivo: `client/src/components/About.tsx`
- Edite o texto de apresentação
- Atualize a lista de tecnologias na variável `skills`

**Projetos:**
- Arquivo: `client/src/components/Projects.tsx`
- Adicione seus projetos reais no array `projects`
- Atualize títulos, descrições, tags, links e imagens

**Contato:**
- Arquivo: `client/src/components/Contact.tsx`
- Integre com um serviço de email (veja seção abaixo)

### Imagens personalizadas

As imagens estão em: `client/public/images/`

- `hero-bg.jpg` - Fundo da seção Hero
- `project-tech.jpg` - Imagem dos projetos
- `profile-abstract.jpg` - Avatar/perfil

Substitua-as por suas próprias imagens (mantenha os mesmos nomes).

### Cores e tema

O tema está definido em: `client/src/index.css`

Procure por `--primary` para alterar a cor principal (verde neon).

## 📧 Integrar Formulário de Contato

### Opção 1: EmailJS (Recomendado)

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure seu serviço de email
3. Instale o pacote:
```bash
pnpm add @emailjs/browser
```

4. Atualize `client/src/components/Contact.tsx`:
```tsx
import emailjs from '@emailjs/browser';

// No componente, adicione:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.init('SEU_PUBLIC_KEY_AQUI');
  
  await emailjs.send(
    'SEU_SERVICE_ID',
    'SEU_TEMPLATE_ID',
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }
  );
};
```

### Opção 2: Formspree

1. Acesse [Formspree](https://formspree.io/)
2. Crie um novo formulário
3. Atualize o `action` do formulário em `Contact.tsx`

## 🏗️ Build para Produção

### Criar versão otimizada
```bash
pnpm build
```

Isso gera os arquivos otimizados em: `dist/`

### Testar a build localmente
```bash
pnpm preview
```

## 🌐 Deploy

### Opção 1: Vercel (Recomendado - Gratuito)

1. Crie uma conta em [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Clique em "Deploy"
4. Pronto! Seu site estará online em segundos

**Alternativa: Deploy via CLI**
```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify

1. Crie uma conta em [Netlify](https://netlify.com)
2. Conecte seu repositório GitHub
3. Configure build command: `pnpm build`
4. Configure publish directory: `dist`
5. Clique em "Deploy"

### Opção 3: GitHub Pages

1. Crie um repositório no GitHub
2. Faça push do código:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/portfolio-dev-pro.git
git push -u origin main
```

3. Vá para Settings > Pages
4. Selecione "Deploy from a branch"
5. Escolha a branch `main` e pasta `dist`

### Opção 4: Manus (Integrado)

Se estiver usando a plataforma Manus:
1. Clique em "Publish" no painel de controle
2. Escolha um domínio personalizado (opcional)
3. Seu site estará online em minutos

## 📁 Estrutura do Projeto

```
portfolio-dev-pro/
├── client/
│   ├── public/
│   │   └── images/           # Suas imagens
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   ├── pages/            # Páginas
│   │   ├── hooks/            # Hooks customizados
│   │   ├── lib/              # Utilitários
│   │   ├── index.css         # Estilos globais
│   │   ├── App.tsx           # App principal
│   │   └── main.tsx          # Entry point
│   └── index.html            # HTML principal
├── server/                   # Servidor (não usado neste projeto)
├── package.json              # Dependências
└── README.md                 # Documentação
```

## 🔧 Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format
```

## 🐛 Troubleshooting

### Porta 3000 já está em uso
```bash
# Use uma porta diferente
pnpm dev -- --port 3001
```

### Erro ao instalar dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build falha
```bash
# Verifique erros de TypeScript
pnpm check

# Limpe o cache de build
rm -rf dist
pnpm build
```

## 📞 Suporte

Para dúvidas sobre:
- **React/Tailwind**: [React Docs](https://react.dev), [Tailwind Docs](https://tailwindcss.com/docs)
- **Vite**: [Vite Docs](https://vitejs.dev/)
- **Deploy**: Consulte a documentação da plataforma escolhida

## 📝 Checklist de Personalização

- [ ] Atualizei meu nome e profissão
- [ ] Personalizei a seção "Sobre Mim"
- [ ] Adicionei meus projetos reais
- [ ] Atualizei tecnologias que domino
- [ ] Substitui as imagens
- [ ] Configurei o formulário de contato
- [ ] Testei localmente com `pnpm dev`
- [ ] Fiz build com `pnpm build`
- [ ] Escolhi uma plataforma de deploy
- [ ] Fiz deploy com sucesso

---

**Pronto para impressionar recrutadores! 🚀**
