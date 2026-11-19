# Kontyra Logo Loading State Standard

This document establishes the official visual, kinetic, and implementation standard for all loading states across Kontyra products (DevOS, Kontyra Accounts, REASTUDIA, Novelora, Kora AI, and VUX Events).

---

## 1. Design Rationale & Principles

Generic spinning circles (`animate-spin border-t-white`) lack brand identity and convey an unpolished user experience. 

All loading events in Kontyra must reinforce the **neural kinetic identity of the Kontyra orbital vector glyph**:
- **Gradient Harmony:** Cyan (`#13D9F2`) to Deep Violet (`#4B00E8`) to Neon Magenta (`#E60082`).
- **Kinetic Geometry:** Dynamic concentric particle orbits, SVG vector path contour lasers, and breathing ambient glows.
- **OLED Surface:** Placed on pure black (`#000000` or `#07070a`) backdrop surfaces.

---

## 2. Four Loading Archetypes

### Archetype 1: Neural Orbit Loader (Primary Brand Boot)
- **Use Case:** Initial application boots, full-page screen redirects, SSO handshakes, DevOS container workspace spin-up.
- **Visuals:**
  - Center: The Kontyra vector glyph gently breathing with KaTeX-smooth easing (`scale(0.96)` to `scale(1.04)`).
  - Orbit 1: Concentric cyan particle ring revolving clockwise at `2.8s linear infinite`.
  - Orbit 2: Concentric magenta particle ring revolving counter-clockwise at `3.6s cubic-bezier(0.4, 0, 0.2, 1)`.
  - Ambient Glow: Soft radial gradient blur (`blur-2xl bg-cyan-500/15`).

### Archetype 2: Laser Path Tracer (Execution & Build)
- **Use Case:** Terminal compiling, sandbox build steps, manuscript exports, AI reasoning generation.
- **Visuals:**
  - Pure SVG vector path utilizing `stroke-dasharray` and `stroke-dashoffset` laser keyframe animations.
  - The electric laser traverses the exact contours of the Kontyra delta mark and outer circle loop in alternating bursts.

### Archetype 3: Conic Iris Sweep (Security & Authentication)
- **Use Case:** Biometric Passkey scans, SAML 2.0 verification, token minting cards.
- **Visuals:**
  - A 360-degree high-frequency rotating conic gradient halo (`conic-gradient(from 0deg, #13D9F2, #4B00E8, #E60082, transparent 65%)`).
  - Encircles an inner frosted glass tile containing the Kontyra emblem.

### Archetype 4: Micro In-Button Spinner & Card Shimmer
- **Use Case:** Form submission buttons ("Authenticating...", "Minting Token..."), list skeleton shimmers.
- **Visuals:**
  - **In-Button:** 16px to 20px compact SVG spinner with Kontyra gradient arc and optic core dot.
  - **Skeleton Shimmer:** Smooth 90-degree gradient wave passing over cards at `1.8s infinite` using brand cyan-magenta highlights rather than dull grey.

---

## 3. Interactive Reference & Preview

Test all 4 loaders live and simulate a full application boot sequence in:
`preview/navbar-showcase.html`
