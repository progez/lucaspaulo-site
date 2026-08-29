# Plano de Projeto — Site Consultor de Soluções em TI

> Landing page de um consultor de soluções em TI (estilo [robertosacoman.com.br](https://robertosacoman.com.br/)).
> Documento vivo — atualizar conforme o projeto anda.

---

## 1. Objetivo

Site de página única (single-page) que apresenta o consultor, seus serviços de TI e portfólio, e converte visitantes em contato direto (WhatsApp / e-mail / LinkedIn). Blog simples para artigos.

**Público:** empresas e gestores que buscam consultoria/desenvolvimento em TI.
**Meta de conversão:** clique no botão de contato (WhatsApp/e-mail).

---

## 2. Decisões técnicas (definidas)

| Item | Decisão | Motivo |
|------|---------|--------|
| Stack | HTML + CSS + JS puro | Zero build, zero dependência, fácil manter |
| Contato | Botões diretos (WhatsApp, e-mail, LinkedIn, GitHub) | Sem backend, custo zero |
| Conteúdo | Do zero, com placeholders | Preencher depois com dados reais |
| Blog | Simples — 1 `.html` por post + página índice | Sem framework; migrar p/ Astro só se volume crescer |
| Hospedagem | GitHub Pages ou Netlify (grátis) | Estático, deploy automático |
| Domínio | *a definir* | Ver seção Pendências |

---

## 3. Estrutura de arquivos

```
LP Solucoes/
├── index.html            # página principal (todas as seções)
├── css/
│   └── style.css         # estilos globais + variáveis de tema
├── js/
│   └── main.js           # menu mobile, scroll suave, animações leves
├── img/                  # foto, logos de clientes, capas de projeto
├── blog/
│   ├── index.html        # lista de artigos
│   └── posts/
│       └── exemplo-post.html
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── PLANO-PROJETO.md
```

---

## 4. Seções da página principal (ordem)

1. **Header / Navegação** — logo/nome + menu (Serviços, Portfólio, Sobre, Blog, Contato). Menu vira hambúrguer no mobile.
2. **Hero** — nome, tagline forte (ex: "Soluções de TI do problema à entrega"), foto, botão "Falar comigo".
3. **Credenciais rápidas** — anos de experiência, formação, certificações (faixa curta com ícones/números).
4. **Serviços** — grid de cards. Ex.: Desenvolvimento, Integrações & Automação, Migrações, Cloud, BI & Dados, IA aplicada, Governança/Gestão de projetos. *(Ajustar à realidade do Lucas.)*
5. **Diferenciais / Foco** — bloco de destaque (ex.: IA & Dados) com 3–4 pontos fortes.
6. **Portfólio** — cards de projetos: título, cliente/segmento, o que foi feito, tecnologias, data.
7. **Clientes / Trajetória** — logos ou lista de empresas atendidas (opcional).
8. **Sobre** — bio, foto, história profissional resumida.
9. **Blog** — 3 posts recentes (puxados manualmente ou link p/ `/blog`).
10. **Contato** — botões: WhatsApp, e-mail, LinkedIn, GitHub. Sem formulário.
11. **Footer** — navegação repetida, direitos, links sociais.

---

## 5. Identidade visual

- **Paleta:** definir 1 cor primária + neutros (cinza/branco) + 1 de destaque. Placeholder inicial: azul/tech.
- **Tipografia:** 1 fonte sans-serif (Google Fonts — ex.: Inter). Máx. 2 pesos.
- **Estilo:** limpo, profissional, muito espaço em branco. Dark mode opcional (fase 2).
- **Responsivo:** mobile-first. Testar em 375px, 768px, 1280px.
- **Acessibilidade:** contraste AA, alt em imagens, navegação por teclado, `aria-label` nos botões.

---

## 6. SEO & performance (básico)

- `<title>` e `<meta description>` por página.
- Open Graph (compartilhamento em WhatsApp/LinkedIn) — título, descrição, imagem.
- `sitemap.xml` + `robots.txt`.
- Imagens otimizadas (WebP), `loading="lazy"`.
- Sem frameworks pesados = carrega rápido.
- Google Analytics ou Plausible (opcional, fase 2).

---

## 7. Roadmap por fases

### Fase 1 — Estrutura (MVP navegável) ✅ construída
- [x] `index.html` com todas as seções + placeholders
- [x] `style.css` base (variáveis, layout, responsivo)
- [x] Header + menu mobile funcionando
- [x] Botões de contato ligados (WhatsApp/e-mail/LinkedIn/GitHub)
- [x] `blog/index.html` placeholder (evita link quebrado)
- [ ] Deploy inicial (GitHub Pages/Netlify) — *pendente: precisa repo git + conta*

### Fase 2 — Conteúdo real
- [ ] Textos reais de serviços e bio
- [ ] Foto e projetos do portfólio
- [ ] Logos de clientes
- [ ] Ajuste de paleta/tipografia final

### Fase 3 — Blog
- [ ] `blog/index.html` (lista)
- [ ] Template de post + 1 post real
- [ ] Link do blog no menu e na home

### Fase 4 — Polimento
- [ ] SEO / Open Graph / sitemap
- [ ] Otimização de imagens e performance
- [ ] Dark mode (se quiser)
- [ ] Domínio próprio + HTTPS
- [ ] Analytics

---

## 8. Contatos (definidos)

| Canal | Valor |
|-------|-------|
| Nome/marca | **Lucas Paulo** |
| WhatsApp | 21 98174-0399 → `wa.me/5521981740399` |
| E-mail | lucasdwzz@gmail.com |
| GitHub | github.com/progez |
| LinkedIn | linkedin.com/in/lucasp-silva/ |
| Domínio | *não registrado ainda* |

## 9. Pendências / decisões abertas

- [ ] **Domínio:** registrar (ex.: `lucaspaulo.com.br`).
- [ ] **Serviços reais:** revisar lista placeholder na seção Serviços.
- [ ] **Números das credenciais:** anos de experiência, projetos, certificações.
- [ ] **Portfólio:** projetos reais (nome, cliente, o que fez, tech, ano).
- [ ] **Bio + foto** para a seção Sobre.
- [ ] **Deploy:** criar repo git e publicar (GitHub Pages/Netlify).

---

## 10. Próximo passo

Fase 1 construída. Rodar local: `python -m http.server 8823` na pasta e abrir `http://localhost:8823`.
Depois: preencher conteúdo real (Fase 2) e fazer deploy inicial.
