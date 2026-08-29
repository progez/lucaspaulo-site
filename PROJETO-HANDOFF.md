# Projeto — Site Lucas Paulo (Consultor de TI) · Handoff

Documento de continuidade. Lê isto antes de mexer. Estado em **2026-08-29**.

---

## 1. O que é

Landing page single-page de um consultor de soluções em TI (Lucas Paulo), estilo
[robertosacoman.com.br](https://robertosacoman.com.br/). Objetivo: apresentar serviços/portfólio
e converter em contato via WhatsApp. Blog simples reservado.

- **Repositório:** https://github.com/progez/lucaspaulo-site
- **No ar (GitHub Pages):** https://progez.github.io/lucaspaulo-site/
- **Domínio próprio:** `lucaspaulo.com.br` — em configuração (ver seção 8)
- **Pasta local:** `C:\Users\Lucas\Documents\LP Solucoes`

---

## 2. Stack & decisões

| Item | Decisão | Motivo |
|------|---------|--------|
| Frontend | HTML + CSS + JS puro (sem build, sem framework) | Site de 1 página; simples de manter |
| Hospedagem | GitHub Pages (branch `master`, root) | Grátis, HTTPS, deploy no push |
| Contato | Botões diretos (WhatsApp/e-mail/LinkedIn/GitHub) | Sem backend |
| Blog | 1 `.html` por post em `/blog` | Sem gerador; migrar p/ Astro só se crescer |
| Analytics | GoatCounter (`lucaspaulo.goatcounter.com`) | Grátis, privacy-first, sem cookie banner |
| Fontes | Google Fonts: Space Grotesk, Inter, Space Mono | — |

**Deploy:** qualquer `git push` na `master` republica em ~1 min. Não há CI.

```bash
git add -A && git commit -m "msg" && git push
```

**Preview local:** `python -m http.server 8823` na pasta → `http://localhost:8823`
(arquivo aberto direto como `file://` NÃO carrega o CSS — servir via http).

---

## 3. Estrutura de arquivos

```
LP Solucoes/
├── index.html          # página principal — todas as seções
├── css/style.css       # tema "Ink & Signal" + responsivo
├── js/main.js          # menu mobile, reveal on scroll, ano do rodapé
├── img/og-cover.png    # imagem de compartilhamento 1200×630
├── favicon.svg         # marca "LP" (L branco, P laranja) em fundo ink
├── blog/index.html     # índice do blog (placeholder)
├── CNAME               # lucaspaulo.com.br (custom domain do Pages)
├── .gitignore          # ignora CURRICULO-NOTION.md
├── CURRICULO-NOTION.md # currículo p/ Notion — NÃO versionado (dados pessoais)
├── PLANO-PROJETO.md    # plano original com roadmap por fases
└── PROJETO-HANDOFF.md  # este arquivo
```

---

## 4. Design system — "Ink & Signal"

Papel cinza-frio + tinta navy + **um único acento** vermelhão queimado. Rótulos em
monoespaçada (mundo do dev). Assinatura: **pipeline** `[01 Problema]→[02 Solução]→[03 Entrega]`
no hero, que amarra com o h1 "Do problema à entrega." — **não quebrar essa amarração.**

Tokens (em `:root` no `css/style.css`):

```
--paper #F5F6F8   --surface #FFFFFF   --ink #0F1620   --ink-soft #1B2532
--muted #5A6472   --hairline #DDE1E7   --signal #E8542B   --signal-dk #C6431F
--f-display Space Grotesk   --f-body Inter   --f-mono Space Mono
```

Regras de estilo:
- Numeração (01/02/03) **só** onde há sequência real (o pipeline). Não decorar com números.
- Acento vermelhão é gasto com parcimônia: CTAs, eyebrows mono, números de índice, hover.
- Eyebrows usam prefixo `// ` em mono. Seções escuras invertem (bg ink, texto paper).
- Acessibilidade: foco visível (`:focus-visible` laranja), `prefers-reduced-motion` respeitado.

---

## 5. Seções da página (ordem em index.html)

1. Header (sticky, menu mobile hambúrguer < 640px). Logo → raiz `./` (sem `#top`).
2. Hero — eyebrow, h1, subtítulo, pipeline, CTAs (WhatsApp + Ver portfólio)
3. Credenciais — 15+ anos · 20+ cursos · AWS · ADS
4. Serviços — 3 cards (Desenvolvimento · Integrações & Automação · IA aplicada)
5. Foco — IA & Dados aplicados (seção escura)
6. Portfólio — 3 projetos (Aliqui, CRM Cor Imagem, RPA Rio Saúde)
7. Certificações — trilhas Alura (DevOps, Redes, Cloud) + link do certificado
8. Sobre — bio (sem foto)
9. Blog — 3 cards placeholder → `/blog`
10. Contato (escuro) — botões WhatsApp/E-mail/LinkedIn/GitHub
11. Footer

---

## 6. Conteúdo & contatos

| Canal | Valor |
|-------|-------|
| Nome | Lucas Paulo Ferreira da Silva |
| WhatsApp | (21) 98174-0399 → `wa.me/5521981740399` |
| E-mail | lucasdwzz@gmail.com |
| GitHub | github.com/progez |
| LinkedIn | linkedin.com/in/lucasp-silva/ |

- Botões de WhatsApp abrem com **mensagem pré-preenchida** via `?text=` (URL-encoded):
  "Olá Lucas! Preciso de uma solução para o meu problema."
- Textos de serviços/portfólio/bio foram reescritos em tom técnico/profissional
  (evitar linguagem amadora — ex.: "configurei Cloudflare" → "camada de rede e segurança na borda").
- Fonte dos dados: currículo em PDF do Lucas + certificado Alura (não versionados).

---

## 7. Analytics

GoatCounter ativo. Script no `<head>` de `index.html` e `blog/index.html`:
```html
<script data-goatcounter="https://lucaspaulo.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
```
Painel: https://lucaspaulo.goatcounter.com

---

## 8. Domínio próprio — status (em andamento)

`lucaspaulo.com.br` registrado no registro.br, **aguardando ativação** (boleto/liberação).

Passos pendentes (responsabilidade do Lucas no registro.br + GitHub):
1. Pagar boleto → domínio ativo
2. DNS no registro.br: 4 registros **A** apex → `185.199.108–111.153`; `www` **CNAME** → `progez.github.io.`
3. GitHub Pages → Settings → Pages → Custom domain já preenchido pelo arquivo `CNAME`
4. Após propagar (`nslookup lucaspaulo.com.br` retornar os IPs) → marcar **Enforce HTTPS**

**TODO quando o domínio resolver:** trocar `og:image` de caminho relativo para URL absoluta
`https://lucaspaulo.com.br/img/og-cover.png` (previews de compartilhamento em alguns apps exigem URL absoluta).

---

## 9. Feito × Pendente

**Feito (Fases 1–2 + extras):**
- Estrutura completa, responsiva, deploy no ar
- Conteúdo real: serviços, portfólio, certificações, credenciais, bio, hero, foco
- Imagem OG, favicon LP, analytics, WhatsApp pré-preenchido
- CNAME preparado

**Pendente / próximos:**
- [ ] Ativação do domínio + DNS (seção 8)
- [ ] `og:image` absoluto após domínio
- [ ] Blog de verdade (1º artigo em `blog/posts/`)
- [ ] `sitemap.xml` + `robots.txt` (SEO)
- [ ] Confirmar/ajustar números das credenciais e frases se o Lucas quiser
- [ ] (Opcional) foto profissional na seção Sobre

---

## 10. Como retomar

1. `git clone https://github.com/progez/lucaspaulo-site` (ou usar a pasta local já existente)
2. `python -m http.server 8823` para preview
3. Editar HTML/CSS/JS diretos; seguir os tokens da seção 4
4. `git push` publica

**Cuidados:**
- Não versionar `CURRICULO-NOTION.md` (está no `.gitignore`; contém dados pessoais).
- Manter a amarração hero h1 ↔ pipeline.
- Um só acento (`--signal`); não introduzir segunda cor de destaque.
