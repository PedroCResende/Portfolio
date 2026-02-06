# 📋 Deployment Checklist

Use este checklist para garantir que tudo está pronto antes de fazer o deploy.

## ✅ Pré-Deployment Local

- [ ] Executei `pnpm install` com sucesso
- [ ] Executei `pnpm dev` e o site rodou em `http://localhost:3000`
- [ ] Testei todas as seções (Home, Sobre, Tecnologias, Projetos, Contato)
- [ ] Testei as animações e interações
- [ ] Testei em mobile (use DevTools: F12 > Toggle device toolbar)
- [ ] Testei em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Personalizei meu nome, profissão e descrição
- [ ] Adicionei meus projetos reais
- [ ] Atualizei a lista de tecnologias
- [ ] Substitui as imagens pelas minhas
- [ ] Configurei os links de redes sociais (GitHub, LinkedIn, Email)

## 🔧 Configuração de Build

- [ ] Executei `pnpm build` sem erros
- [ ] A pasta `dist/` foi criada com sucesso
- [ ] Executei `pnpm preview` e o site funciona
- [ ] Verifiquei que `dist/public/index.html` existe
- [ ] Verifiquei que `dist/public/assets/` contém CSS e JS

## 📧 Formulário de Contato (Opcional)

Se integrou email:
- [ ] Criei conta em EmailJS ou Formspree
- [ ] Configurei as variáveis de ambiente
- [ ] Testei o envio de um email de teste
- [ ] Recebi o email com sucesso

## 🚀 Escolha de Plataforma

### Se escolheu Vercel
- [ ] Criei conta em https://vercel.com
- [ ] Conectei meu repositório GitHub
- [ ] Cliquei em "Deploy"
- [ ] Aguardei o deploy completar
- [ ] Testei o site em produção
- [ ] Configurei domínio personalizado (opcional)

### Se escolheu Netlify
- [ ] Criei conta em https://netlify.com
- [ ] Conectei meu repositório GitHub
- [ ] Arquivo `netlify.toml` está na raiz
- [ ] Cliquei em "Deploy"
- [ ] Aguardei o deploy completar
- [ ] Testei o site em produção
- [ ] Configurei domínio personalizado (opcional)

### Se escolheu GitHub Pages
- [ ] Criei repositório no GitHub
- [ ] Fiz push do código para `main`
- [ ] Ativei GitHub Pages nas configurações
- [ ] Selecionei branch `main` e pasta `dist`
- [ ] Aguardei o deploy automático
- [ ] Testei em `https://seu-usuario.github.io/portfolio-dev-pro`

### Se escolheu Manus
- [ ] Cliquei em "Publish" no painel
- [ ] Escolhi um domínio (manus.space ou personalizado)
- [ ] Aguardei o deploy completar
- [ ] Testei o site em produção

## 🔍 Testes em Produção

- [ ] Acessei o site pelo domínio público
- [ ] Testei todas as seções
- [ ] Testei os botões e links
- [ ] Testei o formulário de contato
- [ ] Testei em mobile
- [ ] Testei em diferentes navegadores
- [ ] Verificei a performance (DevTools > Lighthouse)
- [ ] Verificei se as imagens carregam corretamente
- [ ] Verificei se as animações funcionam

## 🎯 SEO e Metadados

- [ ] Atualizei o título da página (`client/index.html`)
- [ ] Atualizei a descrição (`client/index.html`)
- [ ] Adicionei favicon (opcional)
- [ ] Verificei Open Graph tags (opcional)

## 📱 Responsividade

- [ ] Testei em tela 320px (mobile pequeno)
- [ ] Testei em tela 768px (tablet)
- [ ] Testei em tela 1024px (desktop)
- [ ] Testei em tela 1920px (desktop grande)
- [ ] Todos os elementos estão visíveis e funcionam

## ⚡ Performance

- [ ] Executei Lighthouse (DevTools > Lighthouse)
- [ ] Score de Performance > 80
- [ ] Score de Accessibility > 90
- [ ] Score de Best Practices > 90
- [ ] Score de SEO > 90

## 🔐 Segurança

- [ ] Não há dados sensíveis no código
- [ ] Não há chaves de API expostas
- [ ] Não há senhas no repositório
- [ ] `.env` e `.env.local` estão no `.gitignore`

## 📊 Analytics (Opcional)

- [ ] Configurei Google Analytics (opcional)
- [ ] Verificei se está rastreando visitantes
- [ ] Configurei eventos customizados (opcional)

## 🎉 Final

- [ ] Compartilhei o link com amigos/colegas
- [ ] Pedi feedback
- [ ] Fiz ajustes baseado no feedback
- [ ] Site está pronto para recrutadores!

---

## 🆘 Se algo deu errado

1. **Erro no build**: Execute `pnpm install --force` e tente novamente
2. **Porta 3000 ocupada**: Use `pnpm dev -- --port 3001`
3. **Imagens não carregam**: Verifique se estão em `client/public/images/`
4. **Animações não funcionam**: Verifique o console (F12) para erros
5. **Deploy falhou**: Verifique os logs da plataforma escolhida

## 📞 Suporte

- Documentação: Veja `SETUP.md` e `README.md`
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev

---

**Parabéns! Seu portfólio está pronto para impressionar recrutadores! 🚀**
