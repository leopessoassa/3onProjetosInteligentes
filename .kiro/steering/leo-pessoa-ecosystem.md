---
inclusion: manual
---

# Ecossistema Leo Pessoa — Guia de Sites

## Visão geral

Leo Pessoa opera **quatro sites** com públicos distintos, todos compartilhando a mesma identidade de marca mas com paletas e tons diferentes:

| Site | Público | Paleta | Tom |
|---|---|---|---|
| `leopessoa.eng.br` | Qualquer visitante — redirecionador | Chumbo quente + âmbar | Institucional, neutro |
| `parceiros.leopessoa.eng.br` | Arquitetos e designers (B2B) | Azul petróleo + dourado | Sofisticado, técnico |
| `casainteligente.leopessoa.eng.br` | Cliente final residencial (B2C) | Verde + laranja | Acolhedor, acessível |
| `iot.leopessoa.eng.br` | Empresas com perecíveis (B2B IoT) | Azul cobalto + azul elétrico | Urgente, operacional |

## Diferenciação por paleta

A diferenciação de público por cor é intencional e estratégica:

- **Verde** (`#59ab66`) = B2C — conforto, casa, natureza, acessibilidade
- **Azul petróleo** (`#0b1f2a`) = B2B arquitetura — precisão técnica, confiança, sofisticação
- **Dourado** (`#d4a843`) = accent B2B arquitetura — elegância, premium
- **Azul cobalto** (`#0d1f3c`) = B2B IoT — tecnologia, monitoramento, industrial
- **Azul elétrico** (`#00a8e8`) = accent IoT — sensores, dashboards, alertas
- **Âmbar neutro** (`#c8a96e`) = site principal — neutro entre todos os filhos

O verde `#59ab66` aparece nos CTAs de WhatsApp e checkmarks em **todos** os sites — fio condutor da identidade Leo Pessoa.

## Site principal (leopessoa.eng.br) — ESTE REPOSITÓRIO

### Estrutura implementada

```
HeroSection        — eyebrow + headline + seletor de 3 perfis (B2C / B2B / IoT)
StatsSection       — faixa com 3 números de prova social
AboutSimpleSection — foto + diferenciais + missão
SolutionsSection   — vitrine dos 3 produtos/serviços
ProjectsSection    — cases reais (fundo escuro)
ContactSection     — formulário + contatos (seção clara)
Footer             — 3 colunas
```

### Navegação

```
Sobre · Projetos · Contato · Para Clientes ↗ · KPRemote IoT ↗ · Para Parceiros →
```

Cada link externo tem estilo próprio que usa a cor do site de destino:
- "Para Clientes" → sublinhado âmbar
- "KPRemote IoT" → sublinhado azul elétrico
- "Para Parceiros" → pill âmbar sólido (ação principal)

## Identidade compartilhada entre todos os sites

Independente do site, manter:
- Fontes: **Catamaran** (títulos) + **Roboto** (corpo)
- Logo: `/images/logo.webp`
- Número WhatsApp: centralizado em `whatsapp.ts`
- Grafismo triangular entre seções (`clip-path` + `margin-top` negativo)
- `border-radius: 2px` nos elementos principais — cantos quase retos
- CSS mobile-first com `min-width` media queries

## Mapa de cores por site (referência rápida)

```
leopessoa.eng.br      → --entry-accent: #c8a96e (âmbar)
parceiros.*           → --b2b-accent:   #d4a843 (dourado)  / bg: #0b1f2a
casainteligente.*     → --color-primary: #59ab66 (verde)
iot.*                 → --iot-accent:   #00a8e8 (azul elétrico) / bg: #0d1f3c
```

## Compartilhamento de componentes

Componentes reutilizáveis com ajuste de paleta:
- `ProjectsSection` — mesma estrutura editorial, projetos diferentes
- `Footer` — mesma estrutura 3 colunas, links diferentes
- `whatsapp.ts` — mesmo utilitário, mesmo número `(83) 98207-8702`
- Grafismo triangular CSS — mesmos valores de `clip-path`
