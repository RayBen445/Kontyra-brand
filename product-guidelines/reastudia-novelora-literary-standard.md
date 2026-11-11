# REASTUDIA & NOVELORA — Literary Publishing Architecture

> **Official Kontyra Brand Specification & Product Division Guidelines**
> Division: **Digital Literature, Authoring & Publishing Networks**
> Domain: `reastudia.kontyra.name.ng` & `novelora.kontyra.name.ng`
> Author & Canon Director: **Ray Bén**

---

## 1. Division Overview & Role Separation

Within the Kontyra ecosystem, digital literature is cleanly divided into two dedicated, complementary product platforms:

| Platform | Primary Audience | Core Mission | UI Architecture | Canonical Accents |
|---|---|---|---|---|
| **REASTUDIA** | **Readers** | Discover, read, annotate, discuss serialized novels, vocabulary challenges, and literary salons. | 12-column editorial sanctuary, 96rem max-width, typography-first reading focus. | Warm Ivory (`#F5E8D0`), Amber/Gold (`#D4AF37`), Deep Obsidian (`#050505`). |
| **NOVELORA** | **Writers** | Authoring studio, worldbuilding lore compiler, chapter drafting, and manuscript production. | Workspace canvas, TipTap rich text drafting, lore entities (Character, Location, Item, Event). | Warm Amber/Gold (`#D4AF37`), Dark Slate (`#0A0A0A`), Precision Borders (`#1F1F1F`). |

---

## 2. Shared Design System & Visual Grammar

Both products inherit the high-end editorial dark aesthetic established by Kontyra:

### A. Foundations & Color Palettes
- **Canvas Obsidian:** `#050505` (Deepest backdrop)
- **Surface Elevation 1 (Cards, Modals):** `#0A0A0A`
- **Surface Elevation 2 (Elevated Panels):** `#121212` / `#141414`
- **Hairline Structural Borders:** `#1F1F1F` / `#262626`
- **Primary Brand Accent:** Gold/Amber (`#D4AF37`, `#F59E0B`)
- **Headline Text:** Warm Ivory (`#F5E8D0`, `#FFFFFF`)
- **Reading Body Text:** High Legibility Paper Gray (`#CCCCCC`, `#E5E5E5`)
- **Muted / Metadata Labels:** Editorial Muted (`#737373`, `#888888`)

### B. Typography Stack
- **Serif / Display Headlines:** `Cinzel`, `Cormorant Garamond`, Georgia, serif
- **Prose & Reading Body:** Native system serif or Georgia (`font-reading`, line-height `1.8`, letter-spacing `0.01em`)
- **UI & Control Labels:** `Inter`, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif (uppercase tracking `0.12em` to `0.2em`)
- **Monogram & Code Accents:** `JetBrains Mono`, monospace

---

## 3. Navigation & Cross-Ecosystem Bridges

### TopBar Standard
- **Height:** 68px – 76px desktop, 60px mobile
- **Width:** `max-w-[1920px] mx-auto` with fluid padding
- **Glass Effect:** `#050505/95` backdrop-blur-md
- **Monogram:** 32px – 36px square monogram with 1px gold hairline border (`border-[#D4AF37]/40`)
- **Breadcrumbs:** `/ Studio / [Section]` (Novelora) or `/ Reading / [Book]` (REASTUDIA)
- **Product Cross-Bridge Link:**
  - Novelora features **"Read on REASTUDIA"** pill button
  - REASTUDIA features **"Author on Novelora"** pill button

### Footer Standard
- **Architecture:** 12-column responsive layout
- **Content:**
  - Column 1: Monogram logo, brand manifesto, attribution to Ray Bén
  - Column 2: Platform core navigation
  - Column 3: Legal policies & Kontyra SSO authentication
  - Column 4: Twin product bridge cards linking REASTUDIA & Novelora
  - Colophon / Bottom Bar: Dynamic copyright & ecosystem tagline (*"A World Waiting to Be Weaved."*)

---

## 4. Canon & Front Matter Standards

All publications authored by **Ray Bén** (including *When Wealth Becomes a Curse*, *The House We Built*, and *On Paper*) adhere to the strict front-matter rule:
1. **No Table of Contents** in front matter
2. **Page 0.1:** Copyright & Legal Notices
3. **Page 0.2:** Dedication (to Ariel, unyielding commitment)
4. **Page 0.3:** Epigraph & Thematic Opening Quote
5. **Page 1.0+:** Act I / Chapter 1 narrative opening

---

## 5. Communications & Routing Matrix

| Purpose | Sender Display & Address | Domain | Resend Account |
|---|---|---|---|
| Universal Auth & OTP | `Kontyra Authentication <noreply@auth.kontyra.name.ng>` | `auth.kontyra.name.ng` | `oluwalonimiheritage856` |
| Reader Editorial & Press | `REASTUDIA <hello@reastudia.kontyra.name.ng>` | `reastudia.kontyra.name.ng` | `Kontyra` |
| Reader Support Desk | `REASTUDIA Support <support@reastudia.kontyra.name.ng>` | `reastudia.kontyra.name.ng` | `Kontyra` |
| Parent Ecosystem News | `REASTUDIA <hello@kontyra.name.ng>` | `kontyra.name.ng` | `Kontyra` |
| Community Salons & Events | `Kontyra Events <hello@events.kontyra.name.ng>` | `events.kontyra.name.ng` | `Kontyra` |
| DevOS Execution Platform | `DevOS <devos@devos.kontyra.name.ng>` | `devos.kontyra.name.ng` | `oluwalonimiheritage856` |
