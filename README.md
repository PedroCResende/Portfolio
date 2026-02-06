# Dev Portfolio Pro 🚀

Um portfólio profissional moderno para desenvolvedores, com tema **Cyber-Organic Flow** (verde neon + preto), animações fluidas e interações personalizadas em JavaScript puro.

## ✨ Características

- **Design Moderno**: Tema verde neon com efeito glassmorphism
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos de entrada, scroll, hover e cursor personalizado
- **Performance**: Otimizado com Vite e Tailwind CSS
- **Fácil Personalização**: Estrutura clara e bem comentada
- **Pronto para Deploy**: Configurado para Vercel, Netlify, GitHub Pages ou Manus

## 🎯 Seções

1. **Home** - Apresentação com CTA e redes sociais
2. **Sobre** - Quem você é e suas competências
3. **Tecnologias** - Stack de tecnologias que você domina
4. **Projetos** - Portfólio de projetos com links
5. **Contato** - Formulário para receber mensagens
6. **Footer** - Informações finais

## 🚀 Quick Start

### Instalação
```bash
# 1. Instale as dependências
pnpm install

# 2. Rode o servidor de desenvolvimento
pnpm dev

# 3. Abra no navegador
# http://localhost:3000
```

### Personalização Rápida
- **Nome/Profissão**: `client/src/components/Navbar.tsx`
- **Sobre**: `client/src/components/About.tsx`
- **Projetos**: `client/src/components/Projects.tsx`
- **Imagens**: `client/public/images/`

### Build & Deploy
```bash
# Build para produção
pnpm build

# Deploy automático (Vercel)
vercel

# Ou use Netlify, GitHub Pages, etc.
```

## 📚 Stack Tecnológico

- **React 19** - UI Framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Wouter** - Routing
- **shadcn/ui** - UI Components
- **Lucide Icons** - Icons

## 🎨 Customização

### Cores
Edite `client/src/index.css` e procure por `--primary` para alterar a cor principal.

### Fontes
As fontes estão em `client/index.html`:
- Display: **Syne** (títulos)
- Body: **Space Grotesk** (texto)

### Animações
Todas as animações estão em `client/src/index.css` com nomes descritivos e fáceis de modificar.

## 📧 Integrar Email

O formulário de contato está pronto para integração com:
- **EmailJS** (recomendado)
- **Formspree**
- **Seu próprio backend**

Veja `SETUP.md` para instruções detalhadas.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔐 Segurança

- Sem dados sensíveis no código
- Pronto para variáveis de ambiente
- Seguro para produção

## 📖 Documentação Completa

Veja `SETUP.md` para:
- Instruções detalhadas de setup
- Guia de personalização
- Opções de deploy
- Troubleshooting

## 🎓 Aprendizado

Este projeto demonstra:
- ✅ HTML/CSS/JavaScript puro (sem frameworks pesados)
- ✅ React moderno com hooks
- ✅ TypeScript para type safety
- ✅ Tailwind CSS avançado
- ✅ Animações CSS e JavaScript
- ✅ Design responsivo
- ✅ Performance optimization
- ✅ Acessibilidade

## 🚀 Deploy Recomendado

### Vercel (Mais fácil)
```bash
npm install -g vercel
vercel
```

### Netlify
Conecte seu repositório GitHub e configure:
- Build: `pnpm build`
- Publish: `dist`

### GitHub Pages
Push para GitHub e ative Pages nas configurações.

## 💡 Próximos Passos

1. **Personalize** com suas informações
2. **Adicione** seus projetos reais
3. **Integre** o formulário de email
4. **Teste** localmente
5. **Faça deploy** em sua plataforma preferida

## 📞 Suporte

- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev
- Deploy: Consulte a plataforma escolhida

## 📄 Licença

MIT - Livre para usar e modificar

---

**Criado com ❤️ para impressionar recrutadores**

Pronto para começar? Execute `pnpm install && pnpm dev` 🎉
