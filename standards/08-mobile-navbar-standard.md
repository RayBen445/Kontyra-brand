# Standard 08: Universal Mobile Navigation & Loading State Standard

This document establishes the mandatory visual, dimensional, and behavioral specification for mobile navigation and brand loading states across all Kontyra products (DevOS, REASTUDIA, Novelora, Accounts, Kora AI, VUX Events).

---

## 1. Mobile Navigation Dimensions & Surfaces

| Property | Value | Tailwind Class | Architectural Rule |
| :--- | :--- | :--- | :--- |
| **Mobile Bar Height** | `56px` | `h-14` / `min-h-[56px]` | Flush edge-to-edge compact header on phones |
| **Desktop Bar Height** | `64px` | `h-16` | Standard top application bar |
| **Drawer Model** | **Bottom Sheet (Opens from Below)** | `fixed inset-x-0 bottom-0` | Vercel-style upward slide-in (`translate-y-full` &rarr; `translate-y-0`) |
| **Background Color** | Pure Black (`#000000` / `#07070a`) | `bg-black/85 backdrop-blur-xl` | High contrast, deep OLED blacks |
| **Menu Trigger Rule** | **Zero Triple Hamburgers (STRICTLY NO ☰)** | Custom Kontyra Trigger | Asymmetric Pulse Dash / Bento Matrix / Action Capsule |
| **Border Boundary** | Hairline 1px | `border-b border-white/[0.08]` | Subdued boundaries without heavy card wrappers |
| **Ecosystem Launcher** | 9-Dot Bento (`LayoutGrid`) | `w-4 h-4 text-zinc-300` | Mandatory in top bar across all Kontyra apps |
| **Tactile Feedback** | Top Centered Drag Handle Pill | `w-10 h-1 rounded-full bg-white/20` | Tactile thumb gesture affordance |

---

## 2. Menu Trigger Governance: No Triple Hamburgers

Generic 3-line horizontal hamburger icons (`☰`) are **strictly prohibited** in the Kontyra design language across all repositories and web properties.

Instead, mobile headers deploy **Kontyra Proprietary Triggers**:
1. **Asymmetric Pulse Dash (Primary Brand Standard)**: 
   - A sleek 20px top bar + an asymmetric 10px lower line anchored by a live product optic dot (`w-1.5 h-1.5 rounded-full bg-accent animate-pulse`).
   - Smoothly transforms into a crisp `✕` dismissal icon on drawer open.
2. **Bento Matrix (Secondary)**: 4-square or 9-square micro matrix with ecosystem brand accents.
3. **Action Capsule**: A low-profile pill trigger `[ ● Menu ]` with live status indicator.

---

## 3. Mobile Bottom Sheet Drawer (Vercel-Style: Opens from Below)

When the Asymmetric Pulse Dash is tapped:
- **Upward Slide Transition**: Slides smoothly upward from the bottom viewport boundary (`translate-y-full` &rarr; `translate-y-0`).
- **Tactile Drag Handle**: Centered tactile pill (`w-10 h-1 rounded-full bg-white/20 hover:bg-white/40`) at the top edge of the sheet for thumb gesture feedback.
- **Header**: Authentic Kontyra dual-loop logo mark + App Name + Dismiss pill button.
- **Categorized Link Groups**: Grouped with monospace uppercase headers (`text-[10px] font-mono text-zinc-500 uppercase tracking-wider`).
- **Active State Indicator**: Left border pill (`w-1 h-5 rounded-r-full`) matching the application's signature accent color with a subtle glow, accompanied by active white typography.
- **Bottom User Card**:
  - User Avatar (or typographic monogram) with colored hairline ring.
  - User Display Name and Tier/Role badge (e.g. `Kontyra Pro`, `Super Admin`, `Platform Reader`).
  - Quick Action (Sign In CTA or Sign Out icon button).

---

## 4. Product Signature Accent Palette

Every product maintains its distinct signature accent while adhering to pure black surfaces:

| Product | Accent Hex | Purpose |
| :--- | :--- | :--- |
| **DevOS Platform** | `#13D9F2` | Cloud IDE, Terminal & Containers |
| **Kontyra Accounts** | `#10B981` | Single Sign-On, SAML & Passkeys |
| **REASTUDIA** | `#D4AF37` | Canonical Reading, Literary Salon & Catalog |
| **Novelora** | `#D4AF37` | Author Writing Studio & Editorial |
| **Kora AI** | `#A855F7` | Neural Agent & Multimodal Intelligence |
| **VUX Events** | `#F97316` | Developer Summits & Ticketing |

---

## 5. Official Loading State Standard (Authentic Logo Geometry)

All loading states must strictly use the **authentic twin-loop Kontyra vector geometry** from `kontyra-gradient.svg`. Zero generic chevrons, circles, or spinners are allowed.

### Four Loading Archetypes:
1. **Neural Pulse (Core Boot)**:
   - Authentic dual-loop logo breathing (`scale(0.97)` &rarr; `scale(1.04)`) with volumetric dual-neon cyan/magenta atmospheric glows.
   - Dual concentric orbiting photon particle rings revolving clockwise and counter-clockwise.
2. **Laser Contour Trace (Execution & Build)**:
   - High-intensity laser beam traveling directly along the genuine SVG paths of the Kontyra twin loops using synchronized `stroke-dasharray` and `stroke-dashoffset`.
   - Cyan/Blue beam (`#13D9F2` &rarr; `#079BFF`) on the left loop; Violet/Neon Pink beam (`#1747F2` &rarr; `#E60082`) on the main loop, backed by a subtle ghost trace.
3. **Chromatic Aura Sweep (Security & Authentication)**:
   - 360-degree rotating conic gradient halo (`#13D9F2` &rarr; `#4B00E8` &rarr; `#E60082`) surrounding a frosted glass tile with specular logo glint.
4. **Kinetic Micro-Loader (In-Button & Inline Badges)**:
   - Compact 20px authentic logo with pulsing glow inside action buttons ("Authenticating...", "Minting Token...").

### Vector Snippet Reference:
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
  <path d="M 392.00 297.00 L 391.00 298.00 C 378.02 301.60 365.17 305.62 352.48 310.37 C 327.91 319.49 304.70 332.06 283.47 348.06 C 274.63 354.76 266.39 362.24 259.03 370.52 C 250.77 379.80 244.60 390.69 241.67 402.77 C 238.74 414.73 240.23 427.67 246.51 438.45 C 251.34 446.81 258.82 453.86 267.31 458.74 C 278.48 465.17 291.04 468.22 303.62 469.75 C 322.25 472.07 341.09 471.21 359.62 468.60 C 383.15 465.34 406.49 458.37 428.69 448.97 C 445.62 441.77 461.94 433.00 477.53 423.01 C 491.50 414.07 505.02 404.41 517.92 393.99 C 524.28 388.89 530.40 383.47 536.42 377.94 L 538.00 376.51 L 539.00 377.49 C 543.83 382.49 548.89 387.27 554.02 391.95 C 555.45 393.25 556.75 394.70 558.20 395.97 C 564.12 401.21 570.18 406.31 576.49 411.13 C 585.55 418.06 595.03 424.47 604.81 430.34 C 619.68 439.29 635.43 446.73 651.81 452.61 C 668.51 458.62 685.92 462.67 703.61 464.49 C 720.67 466.26 738.16 465.17 754.91 461.27 C 765.17 458.89 775.47 454.89 784.05 448.45 C 790.62 443.51 796.22 436.90 799.41 429.23 C 802.73 421.17 803.54 411.96 801.37 403.56 C 799.04 394.52 793.63 386.35 786.85 379.83 C 777.62 371.02 766.75 363.95 755.44 358.33 C 739.06 350.15 721.43 344.75 703.50 341.67 C 685.91 338.64 667.92 338.25 650.21 340.59 C 631.78 343.00 613.62 347.88 596.24 354.75 C 584.05 359.54 572.23 365.48 560.85 372.27 C 554.21 376.24 547.74 380.52 541.42 385.03 C 540.35 385.79 539.73 385.93 538.74 384.97 C 532.48 379.03 525.86 373.49 519.00 368.21 C 506.77 358.74 493.79 350.28 480.24 342.92 C 463.38 333.72 445.45 326.23 426.90 320.67 C 415.42 317.24 403.80 314.48 392.00 312.65 L 392.00 297.00 Z" fill="url(#leftGrad)" fill-rule="evenodd"/>
  <!-- Main / Right Loop -->
  <path d="M 440.00 447.00 L 461.00 468.00 C 476.99 484.01 493.67 499.27 511.00 513.79 C 527.79 527.85 545.46 540.78 563.85 552.48 C 587.89 567.80 613.25 580.89 640.17 590.73 C 659.88 597.94 680.45 603.20 701.27 605.99 C 719.98 608.52 739.06 608.59 757.73 605.85 C 770.83 603.93 783.89 599.99 795.73 593.67 C 805.91 588.22 815.11 580.47 821.36 570.61 C 826.96 561.73 829.74 551.18 829.49 540.66 C 829.23 529.75 825.81 519.00 819.78 509.84 C 812.59 498.98 802.93 489.92 792.04 482.78 C 777.63 473.34 761.76 466.08 745.22 461.04 C 730.08 456.41 714.39 453.64 698.61 452.88 C 682.26 452.09 665.91 453.61 649.79 457.26 C 632.74 461.12 616.27 467.58 600.56 475.87 C 586.29 483.42 572.76 492.45 560.10 502.77 C 553.48 508.15 547.05 513.80 540.85 519.67 L 538.00 522.37 L 536.00 520.48 C 527.75 512.72 519.09 505.41 510.07 498.68 C 499.76 491.01 488.94 484.09 477.72 477.92 C 465.34 471.12 452.62 465.04 439.53 459.77 L 440.00 447.00 Z" fill="url(#mainGrad)" fill-rule="evenodd"/>
</svg>
```

---

## 6. Reusable Component Reference

The canonical component is maintained in:
- `design-system/navigation/MobileNavbar.tsx`
- `implementation/components/nav/MobileNavbar.tsx`

Interactive test and live verification page:
- `preview/navbar-showcase.html`
