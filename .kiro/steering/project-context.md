# Project Context — leopessoa.eng.br (site principal / redirecionador)

## O que é este projeto

Site **redirecionador institucional** de **Leo Pessoa — Engenheiro Eletricista**. Construído em React 19 + TypeScript + Vite. Funciona como "marca mãe" do ecossistema — apresenta Leo Pessoa, mostra os 3 produtos/serviços e direciona o visitante para o site especializado correto.

**Não é um site de conversão.** Não vende produto específico. Apresenta o profissional e orienta o visitante.

## Ecossistema de sites Leo Pessoa

| Domínio | Público | Paleta | Status |
|---|---|---|---|
| `leopessoa.eng.br` | Qualquer visitante — redirecionador | Chumbo quente + âmbar | **Este projeto** |
| `parceiros.leopessoa.eng.br` | Arquitetos e designers (B2B) | Azul petróleo + dourado | Concluído |
| `casainteligente.leopessoa.eng.br` | Cliente final residencial (B2C) | Verde + laranja | Concluído |
| `iot.leopessoa.eng.br` | Empresas com perecíveis (B2B IoT) | Azul cobalto + azul elétrico | Concluído |

## Stack

- React 19 + TypeScript + Vite
- React Router DOM (single-page, rota `/` apenas)
- React Hook Form (formulário de contato)
- CSS Modules + CSS global do template Ingenious
- Vitest + React Testing Library

## Estrutura de seções

```
HomePage
├── HeroSection        — eyebrow + headline + seletor de 3 perfis
├── StatsSection       — faixa com 3 números (triângulo de entrada do Hero)
├── AboutSimpleSection — foto + diferenciais numerados + missão
├── SolutionsSection   — vitrine dos 3 produtos (triângulo de entrada)
├── ProjectsSection    — cases reais, fundo escuro (triângulo entrada + saída)
├── ContactSection     — formulário + contatos (triângulo de entrada)
└── Footer             — 3 colunas + triângulo de entrada no topo
```

**Nota:** A `KeepinSection` foi substituída pela `SolutionsSection` em julho/2026. Não recriar.

## Paleta — site principal (chumbo quente)

Definida em `src/assets/styles/variables.css`:

```css
/* Fundos escuros */
--entry-bg-deep:    #1c1c1e   /* chumbo quase preto */
--entry-bg-section: #242426
--entry-bg-card:    rgba(255,255,255,0.07)

/* Accent âmbar neutro — entre dourado B2B e verde B2C */
--entry-accent:      #c8a96e
--entry-accent-dark: #a88a50
--entry-accent-bg:   rgba(200,169,110,0.15)

/* CTAs de direcionamento — cores dos sites de destino */
--entry-cta-b2b:      #d4a843   /* dourado — card "Sou Parceiro" */
--entry-cta-b2b-bg:   rgba(212,168,67,0.15)
--entry-cta-b2c:      #59ab66   /* verde — card "Sou Cliente" */
--entry-cta-b2c-bg:   rgba(89,171,102,0.15)
--entry-cta-iot:      #00a8e8   /* azul elétrico — card "Sou Empresa" */
--entry-cta-iot-bg:   rgba(0,168,232,0.15)
```

## Seletor de perfis — HeroSection

3 cards com peso visual igual. **Nunca dar destaque visual a um card em detrimento dos outros.**

| Card | Cor | Destino |
|---|---|---|
| Sou Cliente | Verde `#59ab66` | `casainteligente.leopessoa.eng.br` |
| Sou Parceiro | Dourado `#d4a843` | `parceiros.leopessoa.eng.br` |
| Sou Empresa | Azul elétrico `#00a8e8` | `iot.leopessoa.eng.br` |

## Navegação — Header

Itens em `src/data/navigation.ts`:
```
Sobre · Projetos · Contato · Para Clientes ↗ · KPRemote IoT ↗ · Para Parceiros →
```

Tipos de item no `NavItem` (`src/types/navigation.ts`):
- `isClientLink` → sublinhado âmbar, ↗
- `isIotLink`    → sublinhado azul elétrico, ↗
- `isCta`        → pill âmbar sólido, → (ação principal)

## SolutionsSection

Vitrine dos 3 produtos. Cada card é um `<a>` clicável para o site especializado.
Conteúdo editável: array `solutions` em `SolutionsSection.tsx`.

## Conteúdo editável

| O que mudar | Arquivo |
|---|---|
| Menu de navegação | `src/data/navigation.ts` |
| Número WhatsApp | `src/utils/whatsapp.ts` — `WHATSAPP_PHONE` |
| Número formatado | `src/utils/whatsapp.ts` — `WHATSAPP_DISPLAY` |
| Cards de perfil (Hero) | `HeroSection.tsx` — JSX dos 3 cards |
| Vitrine de produtos | `SolutionsSection.tsx` — array `solutions` |

---

## Regras de CSS — mobile-first obrigatório

**Todos os CSS modules usam mobile-first:** estilos base definem mobile, e `@media (min-width: X)` escala para cima. **Nunca usar `max-width` media queries.**

Breakpoints padrão:
```
480px  — tablet pequeno
600px  — tablet
768px  — tablet largo
992px  — desktop
1200px — desktop largo
```

---

## Sistema de triângulos de transição

Padrão visual do ecossistema Leo Pessoa. Toda transição de cor entre seções usa grafismo triangular via `clip-path` + `margin-top` negativo.

### Valores por breakpoint

| Breakpoint | `margin-top` | altura do triângulo |
|---|---|---|
| mobile base | `-40px` | `40px` |
| `768px+` | `-80px` | `80px` |
| `992px+` | `-190px` | `120px` |

### JSX obrigatório

```tsx
<section className={styles.section}>
  <div className={styles.backgroundLayers} aria-hidden="true">
    <div className={styles.triangleOverlay} />
    <div className={styles.imageBg} />
  </div>
  <div className={styles.contentWrapper}>
    <div className={styles.container}>
      {/* conteúdo */}
    </div>
  </div>
</section>
```

### Stack de z-index

Cada seção com triângulo recebe z-index incremental (começa em 2):
```
StatsSection      z-index: 2
SolutionsSection  z-index: 3
ProjectsSection   z-index: 4
ContactSection    z-index: 5
```

### ⚠️ Regra crítica de padding — sobreposição de conteúdo

**O triângulo da próxima seção avança N pixels para dentro da seção atual.** O conteúdo no final da seção atual pode ficar coberto se não houver `padding-bottom` suficiente.

**Fórmula:**
```
padding-bottom da seção atual = |margin-top da próxima| + respiro visual

mobile  (-40px):  padding-bottom mínimo = 80px   (40 overlap + 40 respiro)
768px   (-80px):  padding-bottom mínimo = 120px  (80 overlap + 40 respiro)
992px   (-190px): padding-bottom mínimo = 240px  (190 overlap + 50 respiro)
```

**Valores aplicados atualmente:**

| Seção | pb mobile | pb 768px | pb 992px |
|---|---|---|---|
| `StatsSection` (`.bar`) | `80px` | `120px` | — |
| `AboutSimpleSection` | `96px` | `120px` | `240px` |
| `SolutionsSection` | `80px` | `120px` | `150px`* |

*ProjectsSection usa `margin-top: -40/60/75px` (não -190px) — valor diferente.

> **Atenção:** Toda vez que adicionar conteúdo ao final de uma seção predecessora, ou mudar o `margin-top` de qualquer seção, recalcular o `padding-bottom` usando a fórmula acima.

### Toque âmbar nos triângulos decorativos

O triângulo decorativo secundário (canto direito) usa `rgba(200, 169, 110, 0.08~0.12)` — toque sutil do accent âmbar do site principal. Isso diferencia visualmente do IoT (que usa accent azul elétrico) e do parceiros (que usa accent dourado).

---

## Regras críticas de CSS aprendidas em produção

1. **Mobile-first:** estilos base = mobile. Breakpoints só com `min-width`.
2. **Headlines:** começam pequenas em mobile (28~30px) e crescem com `min-width`.
3. **Grids multi-coluna:** começam em `1fr`. Expandem em `992px+`.
4. **CTAs em mobile:** `width: 100%`, voltam para `auto` em `480px+`.
5. **`min-height: 100svh`** no hero — desconta barra do browser no iOS.
6. **`padding-bottom` nas predecessoras:** ver fórmula de triângulo acima — regra mais crítica do projeto.
7. **Separadores em grids:** nunca usar `<div>` de separador no DOM. Usar `border-right`/`border-left` CSS.
8. **Números decorativos:** nunca `position: absolute` em mobile. Usar `flex` com `justify-content: space-between`.

---

## Utilitário WhatsApp

`src/utils/whatsapp.ts` centraliza toda a lógica. **Nunca hardcodar número ou URL no componente.**

```ts
whatsappUrl(message)    // dentro de componentes — detecta mobile/desktop
whatsappBaseUrl()       // dentro de componentes — sem mensagem
whatsappStaticUrl(msg?) // fora de componentes (arrays, constantes)
WHATSAPP_DISPLAY        // '(83) 98207-8702'
```

## Fontes

- **Catamaran** — títulos, eyebrows, números ordinais, botões
- **Roboto** — corpo do texto
- **Open Sans** — uso secundário

## Ícones

Font Awesome 5 via CDN. Preferir numeração ordinal ou traços âmbar em seções sofisticadas.
