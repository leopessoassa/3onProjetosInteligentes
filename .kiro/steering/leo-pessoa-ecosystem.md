---
inclusion: manual
---

# Ecossistema Leo Pessoa — Guia de Sites

## Visão geral

Leo Pessoa opera três sites com públicos distintos, todos compartilhando a mesma identidade de marca mas com paletas e tons diferentes:

| Site | Público | Paleta | Tom |
|---|---|---|---|
| `leopessoa.eng.br` | Redirecionador — qualquer visitante | Neutro/elegante | Institucional |
| `parceiros.leopessoa.eng.br` | Arquitetos e designers de interiores (B2B) | Azul petróleo + dourado | Sofisticado, técnico |
| `casainteligente.leopessoa.eng.br` | Cliente final residencial (B2C) | Verde + laranja | Acolhedor, acessível |

## Diferenciação por paleta

A diferenciação de público por cor é intencional e estratégica:

- **Verde** (`#59ab66`) = B2C — conforto, casa, natureza, acessibilidade
- **Azul petróleo** (`#0b1f2a` / `#0f2535`) = B2B — precisão técnica, confiança, sofisticação
- **Dourado** (`#d4a843`) = accent B2B — elegância, premium, diferenciação

O verde aparece nos CTAs de WhatsApp e checkmarks em ambos os sites — mantendo a identidade Leo Pessoa como fio condutor.

## Site redirecionador (leopessoa.eng.br) — ESTE REPOSITÓRIO

### Estrutura atual (implementada)
```
HeroSection          — identidade + seletor de perfil (2 cards: Sou Cliente / Sou Parceiro)
StatsSection         — faixa clara com 3 números (150+ cômodos, 100+ clientes, 12 anos)
AboutSimpleSection   — foto + diferenciais + missão (tom institucional neutro)
ProjectsSection      — 3 cases reais com layout editorial petróleo
ContactSection       — formulário + contatos (seção escura)
Footer               — 3 colunas: identidade / navegação / contato
```

### Navegação (navigation.ts)
```
Sobre · Projetos · Contato · Para Clientes ↗ · Para Parceiros →
```

### Seções removidas (pertencem ao site de parceiros)
- HeroSlider, InspirationSection, AboutSection (B2B), HowItWorksSection
- GettingStartedSection, LetsBeginSection, ProofBar, HowToUseSection
- ServicesSection, ClientsCarousel, SalePlansSection, PortfolioCarousel

### Páginas removidas
- `/about`, `/contact` — site é single-page, tudo na HomePage

## Compartilhamento de componentes entre sites

Componentes que podem ser reutilizados com ajuste de paleta:
- `HeroSlider` — mesma estrutura, slides diferentes
- `ProjectsSection` — mesma estrutura editorial, projetos diferentes
- `Footer` — mesma estrutura 3 colunas, links diferentes
- `ProofBar` — mesma estrutura, stats diferentes
- `whatsapp.ts` — mesmo utilitário, mesmo número

## Identidade compartilhada

Independente do site, manter:
- Fontes: **Catamaran** (títulos) + **Roboto** (corpo)
- Logo: `/images/logo.webp`
- Número WhatsApp: centralizado em `whatsapp.ts`
- Grafismo triangular entre seções — marca registrada visual do projeto
- `border-radius: 2px` nos elementos principais — cantos quase retos, linguagem premium
