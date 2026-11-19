# Kontyra Logo Loading State Standard

This document establishes the official visual, kinetic, and implementation standard for all loading states across Kontyra products (DevOS, Kontyra Accounts, REASTUDIA, Novelora, Kora AI, and VUX Events).

---

## 1. Design Rationale & Principles

Generic spinning circles (`animate-spin border-t-white`) or generic triangles/chevrons lack brand identity and convey an unpolished user experience. 

All loading events in Kontyra must reinforce the **authentic dual-loop infinity vector mark of Kontyra**:
- **Twin-Loop Ribbon Geometry:**
  - **Left Loop (`leftGrad`):** Linear gradient from Cyan (`#13D9F2`) &rarr; Electric Sky (`#079BFF`) &rarr; Deep Blue (`#0B45E8`).
  - **Main / Right Loop (`mainGrad`):** Linear gradient from Royal Blue (`#1747F2`) &rarr; Deep Violet (`#4B00E8`) &rarr; Magenta (`#B000D5`) &rarr; Neon Pink (`#E60082`).
- **OLED Surface:** Placed on pure black (`#000000` or `#07070a`) backdrop surfaces with soft volumetric neon ambient glows.
- **Zero Generic Placeholders:** Never use arbitrary chevrons, circles, or generic loading spinners.

---

## 2. Four Loading Archetypes

### Archetype 1: Kontyra Twin-Loop Neural Pulse (Core Boot)
- **Use Case:** Initial application boots, full-page screen redirects, SSO handshakes, DevOS container workspace spin-up.
- **Visuals:**
  - **Center:** The genuine Kontyra logo emblem gently breathing (`scale(0.97)` to `scale(1.04)`) with volumetric dual-neon atmospheric glow (`drop-shadow(0 0 28px rgba(19, 217, 242, 0.7)) drop-shadow(0 0 52px rgba(230, 0, 130, 0.55))`).
  - **Orbit 1:** Concentric cyan photon particle ring revolving clockwise at `2.8s linear infinite`.
  - **Orbit 2:** Concentric magenta photon particle ring revolving counter-clockwise at `3.6s cubic-bezier(0.4, 0, 0.2, 1)`.

### Archetype 2: Kontyra Infinite Laser Tracer (Execution & Build)
- **Use Case:** Terminal compiling, sandbox build steps, manuscript exports, AI reasoning generation.
- **Visuals:**
  - The actual Kontyra logo curves drawn in real-time by a laser beam traveling through its twin loops!
  - Underneath: Faint ghost vector paths (`stroke="rgba(255, 255, 255, 0.08)" stroke-width="6"`).
  - Animated SVG stroke:
    - Left loop: Laser stroke with `#13D9F2` &rarr; `#079BFF` traveling continuously through the loop via `stroke-dasharray` and `stroke-dashoffset`.
    - Main loop: Laser stroke with `#1747F2` &rarr; `#E60082` traveling in synchronization.

### Archetype 3: Kontyra Chromatic Aura Sweep (Security & Authentication)
- **Use Case:** Biometric Passkey scans, SAML 2.0 verification, token minting cards.
- **Visuals:**
  - A 360-degree high-frequency rotating chromatic conic gradient halo (`conic-gradient(from 0deg, #13D9F2, #4B00E8, #E60082, transparent 60%, #13D9F2)`).
  - Encircles an inner frosted glass tile containing the authentic Kontyra emblem with a specular light glint sweeping across its surface.

### Archetype 4: Kontyra Kinetic Micro-Loader (In-Button & Inline Badges)
- **Use Case:** Form submission buttons ("Authenticating...", "Minting Token..."), list skeleton shimmers.
- **Visuals:**
  - **In-Button:** 20px compact authentic Kontyra logo with subtle kinetic breathing pulse and status copy.
  - **Skeleton Shimmer:** Smooth 90-degree gradient wave passing over cards at `1.8s infinite` using brand cyan-magenta highlights (`rgba(19, 217, 242, 0.12)` to `rgba(230, 0, 130, 0.16)`) rather than dull grey.

---

## 3. Official Vector Reference

```html
<svg viewBox="240 285 545 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="leftGrad" x1="250" y1="300" x2="520" y2="610" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#13D9F2"/>
      <stop offset="0.48" stop-color="#079BFF"/>
      <stop offset="1" stop-color="#0B45E8"/>
    </linearGradient>
    <linearGradient id="mainGrad" x1="440" y1="320" x2="780" y2="610" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1747F2"/>
      <stop offset="0.38" stop-color="#4B00E8"/>
      <stop offset="0.68" stop-color="#B000D5"/>
      <stop offset="1" stop-color="#E60082"/>
    </linearGradient>
  </defs>
  <!-- Left Loop -->
  <path d="M 392.00 297.00 L 391.00 298.00 ... Z" fill="url(#leftGrad)" fill-rule="evenodd"/>
  <!-- Main / Right Loop -->
  <path d="M 440.00 447.00 L 461.00 468.00 ... Z" fill="url(#mainGrad)" fill-rule="evenodd"/>
</svg>
```

---

## 4. Interactive Reference & Preview

Test all 4 loaders live and simulate a full application boot sequence in:
`preview/navbar-showcase.html` or `Kontyra Accounts/index.html`
