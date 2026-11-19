# Kontyra Loading State & Product Logo Standard

This document establishes the official visual, kinetic, and architectural standard for all loading states across the entire Kontyra ecosystem.

---

## 1. Golden Law: Products Must Use Their Own Logo for In-App Loading

> [!IMPORTANT]
> **EACH PRODUCT MUST USE ITS OWN LOGO FOR ITS LOADING STATES.**
> Individual Kontyra products (DevOS, REASTUDIA, Novelora, VUX Events, Kora AI, VyntaJobs, and Kontyra Accounts) must **never use generic spinning circles (`animate-spin border-t-white`) or generic shapes**. 
> Furthermore, in-app loading states must feature the **product's own official logo mark** rather than defaulting to the parent Kontyra logo, preserving brand recognition and product identity.

### Scope Matrix: When to Use Product Logo vs. Kontyra Parent Logo

| Context / Event | Logo to Display | Kinetic Archetype | Notes |
| :--- | :--- | :--- | :--- |
| **Product In-App Boot / Splash** | **Individual Product Logo** | Neural Pulse or Laser Contour Trace | Uses the product's own vector mark with its dedicated brand accent glow |
| **Product Route Transitions** | **Individual Product Logo** | Laser Contour Trace or Kinetic Micro-loader | Crisp, brand-grounded transition |
| **Product In-Button Actions** | **Individual Product Logo** | Kinetic Micro-loader | 18–20px compact pulsing product emblem |
| **Product Content / Data Fetching** | **Individual Product Logo** | Chromatic Aura Sweep or Skeleton Shimmer | Product-themed shimmer pass |
| **Cross-Product SSO & Handshake** | **Kontyra Parent Dual-Loop Logo** | Chromatic Aura Sweep or Neural Pulse | Cross-ecosystem identity & token minting |
| **Central Kontyra OS Boot** | **Kontyra Parent Dual-Loop Logo** | Neural Pulse & Laser Contour Trace | Platform root initialization |

### Product Logo & Accent Mapping for Loading States:

| Product | Product Logo Vector / Icon | Signature Accent | Laser / Glow Beam Colors |
| :--- | :--- | :--- | :--- |
| **DevOS Platform** | DevOS Slash / Terminal Mark (`/icons/devos_icon.svg`) | Electric Cyan (`#13D9F2`) | Cyan (`#13D9F2`) &rarr; Electric Sky (`#079BFF`) |
| **Kontyra Accounts** | Kontyra Security Shield / ID Mark (`/logo.svg`) | Trust Emerald (`#10B981`) | Emerald (`#10B981`) &rarr; Cyan (`#13D9F2`) |
| **REASTUDIA** | REASTUDIA Open Book / Monogram (`/icons/reastudia_icon.png`) | Sovereign Gold (`#D4AF37`) | Warm Gold (`#D4AF37`) &rarr; Warm Ivory (`#F5E8D0`) |
| **Novelora Studio** | Novelora Quill / Lore Mark (`/icons/novelora_icon.webp`) | Literary Gold (`#D4AF37`) | Gold (`#D4AF37`) &rarr; Amber (`#F59E0B`) |
| **Kora AI** | Kora Neural Sparkle / Orb Mark | Deep Violet (`#4B00E8`) | Violet (`#4B00E8`) &rarr; Magenta (`#B000D5`) |
| **VUX Events** | VUX Bolt / Access Ticket Mark (`/icons/vux_icon.svg`) | Neon Pink / Magenta (`#E60082`) | Magenta (`#E60082`) &rarr; Ticket Coral (`#F43F5E`) |
| **VyntaJobs** | Vynta Escrow Hexagon Mark (`/icons/vyntajobs_icon.svg`) | Marketplace Indigo (`#1747F2`) | Indigo (`#1747F2`) &rarr; Cyan (`#13D9F2`) |

---

## 2. The Four Official Loading Archetypes

Every product adapts these 4 kinetic archetypes to its **own SVG geometry** and **dedicated accent colors**:

### Archetype 1: Neural Pulse (Product Core Boot)
- **Use Case:** Initial application boot, workspace launch, full-page screen redirects.
- **Visuals:**
  - **Center:** The product's official logo mark gently breathing (`scale(0.97)` to `scale(1.04)`) with volumetric dual-neon atmospheric glow using the product's primary and secondary accents.
  - **Orbit 1:** Concentric photon particle ring revolving clockwise at `2.8s linear infinite`.
  - **Orbit 2:** Concentric photon particle ring revolving counter-clockwise at `3.6s cubic-bezier(0.4, 0, 0.2, 1)`.

### Archetype 2: Laser Contour Trace (Execution & Terminal Compilation)
- **Use Case:** Code compilation in DevOS, sandbox container build, manuscript export in Novelora, neural reasoning in Kora AI.
- **Visuals:**
  - A high-intensity laser beam travels directly along the vector contours (`stroke-dasharray` and `stroke-dashoffset`) of the product's own SVG mark!
  - Underneath: Faint ghost vector paths (`stroke="rgba(255, 255, 255, 0.08)" stroke-width="6"`).
  - Synchronized laser stroke highlighted by an SVG Gaussian blur glow filter (`stdDeviation="3.5"`).

### Archetype 3: Chromatic Aura Sweep (Security, Handshakes & Cards)
- **Use Case:** Passkey authentication, token exchange, credential validation cards.
- **Visuals:**
  - A 360-degree high-frequency rotating chromatic conic gradient halo (`conic-gradient`) tuned to the product's accent spectrum.
  - Encircles an inner frosted glass tile containing the product emblem with a specular light glint sweeping across its surface.

### Archetype 4: Kinetic Micro-Loader (In-Button & Inline Badges)
- **Use Case:** Form submission buttons ("Building Container...", "Minting Key...", "Publishing Chapter..."), list skeleton shimmers.
- **Visuals:**
  - **In-Button:** 18–20px compact product emblem with subtle kinetic breathing pulse and status label.
  - **Skeleton Shimmer:** Smooth 90-degree gradient wave passing over cards at `1.8s infinite` using product-accented tinted highlights rather than lifeless flat grey.

---

## 3. Parent Kontyra Logo Reference (Cross-App SSO & OS Boots)

For platform-level handshakes and cross-ecosystem routing:

```html
<svg viewBox="240 285 545 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="leftGrad" x1="250" y1="300" x2="520" y2="610" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#13D9F2"/>
      <stop offset="48%" stop-color="#079BFF"/>
      <stop offset="100%" stop-color="#0B45E8"/>
    </linearGradient>
    <linearGradient id="mainGrad" x1="440" y1="320" x2="780" y2="610" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1747F2"/>
      <stop offset="38%" stop-color="#4B00E8"/>
      <stop offset="68%" stop-color="#B000D5"/>
      <stop offset="100%" stop-color="#E60082"/>
    </linearGradient>
  </defs>
  <!-- Left Loop -->
  <path d="M 392.00 297.00 L 391.00 298.00 C ... Z" fill="url(#leftGrad)" fill-rule="evenodd"/>
  <!-- Main / Right Loop -->
  <path d="M 440.00 447.00 L 461.00 468.00 C ... Z" fill="url(#mainGrad)" fill-rule="evenodd"/>
</svg>
```

---

## 4. Implementation Guidelines for Developers

When implementing a loading state in any Kontyra repository:
1. **Never import `Loader2` from lucide-react** as a standalone raw spinner.
2. Check the product you are building:
   - If in **DevOS**, import/render the DevOS logo contour or pulse.
   - If in **REASTUDIA**, import/render the REASTUDIA book mark.
   - If in **Novelora**, import/render the Novelora quill mark.
   - If in **Kontyra Accounts** (in-app dashboard), use the Kontyra Accounts shield/mark.
   - If in **SSO handoff (`/auth`)**, use the dual Kontyra & Target-App bridge visualization.
3. Apply the appropriate kinetic archetype (Neural Pulse, Laser Trace, Chromatic Sweep, or Micro-loader).

---

## 5. Interactive Reference & Preview

Test all 4 loaders live and simulate full product and platform loading sequences in:
- `Kontyra-brand`: `preview/navbar-showcase.html`
- `Kontyra Accounts`: `index.html`
