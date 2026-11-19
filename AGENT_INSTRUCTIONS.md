# Kontyra Autonomous Coding Agent Directive: UI, Box & Product Identity Standard

> **Target Audience:** All AI Coding Agents, Human Pair Programmers, and Full-Stack Developers working on any Kontyra repository.  
> **Source of Truth:** `https://github.com/RayBen445/Kontyra-brand`  
> **Live Design System Preview:** [`preview/index.html`](./preview/index.html)  
> **Version:** 2.2.0

---

## 1. Golden Law: Preserve App Identity & Domain Accent Colors

> [!IMPORTANT]
> **NEVER DISPOSE OF AN APP'S ACCENT COLOR.**
> While all Kontyra products share a pure black baseline (`#000000`), hairline borders (`rgba(255, 255, 255, 0.08)`), and universal navigation, **each specific Kontyra app has its own dedicated brand color**. 
> You MUST integrate that app's specific accent color in the UI in at least two or three intentional ways (e.g., active tab pills, badge borders, top specular gradients, hover glows, micro-pulse dots).

### App-Specific Color Mapping Registry:

| Product / App | Domain / Canonical URL | Dedicated Brand Accent Color | Hex Code | Where to Use It |
| :--- | :--- | :--- | :--- | :--- |
| **DevOS** | `devos.kontyra.name.ng` | **Electric Cyan** | `#13D9F2` | Terminal cursors, active port pills, tab indicators, editor highlight beams |
| **Accounts / SSO** | `accounts.kontyra.name.ng` | **Trust Emerald** | `#10B981` | WebAuthn passkey badges, success checkmarks, active session pings, security shields |
| **KORA AI** | `api.kontyra.name.ng` / Kora | **Neural Deep Blue & Violet** | `#079BFF` & `#4B00E8` | Neural stream loaders, model badges, token completion highlights |
| **VUX Events** | `vux.kontyra.name.ng` | **Neon Pink & Magenta** | `#E60082` | Live ticket badges, VIP lanyards, stage countdown timers |
| **VyntaJobs** | `jobs.kontyra.name.ng` | **Marketplace Indigo** | `#1747F2` | Escrow verification badges, bid indicators, contract sign buttons |
| **Novelora** | `novelora.kontyra.name.ng` | **Literary Sovereign Gold** | `#D4AF37` | Manuscript chapter badges, ribbon bookmarks, royalty counters, serif quotes |
| **REASTUDIA** | `reastudia.kontyra.name.ng` | **Warm Ivory & Paper White** | `#F5E8D0` | Ambient reading lamps, bookmark indicators, reading progress bar |
| **Console / Cloud** | `console.kontyra.name.ng` | **Core Brand Cyan & Indigo** | `#13D9F2` & `#0B45E8` | Cluster health meters, telemetry charts, API key labels |
| **Developer Headless API** | `api.kontyra.name.ng` | **Terminal Emerald & Cyan** | `#10B981` & `#13D9F2` | Status indicators, HTTP `200 OK` pings, Bearer token wells |

---

## 2. Boxes, Containers & Surfaces Standard

### A. The Baseline Canvas
- **Viewport Background:** Always pure black `#000000`. Never `#0f172a`, `#111827`, or dark grey.
- **Card Surface (`#09090b`):** 1st-level content cards.
- **Recessed Well Surface (`#050508`):** Code blocks, terminal inputs, and API secret fields sit physically recessed using `box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.7)`.
- **Dialog Surface (`#0e0e13` or Ultra-Glass):** Floating modals use `rgba(14, 14, 19, 0.55)` with `backdrop-blur: 28px` and `border: 1px solid rgba(255, 255, 255, 0.14)`.

### B. Rotating Glowing Perimeter Beam (When Clicked / Focused)
Whenever an interactive box or card is selected or focused, wrap or animate a smooth 360° rotating conic beam around its 1px perimeter:

```css
@property --kontyra-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotateBeam {
  to {
    --kontyra-angle: 360deg;
  }
}

.glowing-box-target.is-active-glow::before {
  content: '';
  position: absolute;
  inset: -1.5px;
  border-radius: inherit;
  padding: 1.5px;
  background: conic-gradient(
    from var(--kontyra-angle),
    transparent 0%,
    var(--app-accent-color, #13D9F2) 30%,
    transparent 70%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: rotateBeam 3s linear infinite;
  pointer-events: none;
  z-index: 20;
}
```

---

## 3. Navigation Bar Architecture (Height: Exactly 56px)

1. **Sticky Top:** `h-14` (`56px`), `bg-black/85 backdrop-blur-xl border-b border-white/[0.08]`.
2. **Left Logo:** Use the official Kontyra gradient SVG vector mark (`viewBox="240 285 545 340"` from `kontyra-gradient.svg`).
3. **STRICTLY NO 3-Line Hamburger (☰):** Generic horizontal 3-line hamburger buttons are forbidden. Mobile headers deploy **Kontyra Proprietary Triggers**:
   - **Asymmetric Pulse Dash (Primary):** Sleek 20px top bar + 10px lower dash with live accent optic dot (`animate-pulse`), smoothly morphing to `✕`.
   - **Bento Launcher:** `LayoutGrid` 9-dot / 4-dot ecosystem launcher.
4. **Vercel-Style Bottom Sheet Drawer:** Mobile navigation slides up from below (`translate-y-full` &rarr; `translate-y-0`) with a centered tactile drag handle pill (`w-10 h-1 rounded-full bg-white/20`).

---

## 4. Modal Dialogs & Authentication Screens

1. **Ultra-Glass Transparency:**
   Modals must be designed with high-end frosted glass (`rgba(14, 14, 19, 0.55)` + `backdrop-blur-2xl` + `border-white/[0.14]`).
2. **Mandatory Exit Controls:**
   Always provide a prominent **Exit ✕** button in the top right header AND a secondary **Exit / Cancel** button in the action row.
3. **2-Step Authentication Standard:**
   - **Step 1:** Email identifier input + Federated Google/GitHub buttons + Biometric Passkey trigger.
   - **Step 2:** User sees their email badge with a "Change" button, and toggles between **Password** and **Passwordless Magic Link**.

---

## 5. Official Loading State Standard (Product-Specific Logo Rule)

> [!IMPORTANT]
> **EACH PRODUCT MUST USE ITS OWN LOGO FOR ITS LOADING STATES.**
> Never use generic spinning circles (`animate-spin border-t-white`) or generic shapes.
> - **Product Autonomy:** When inside an individual product (DevOS, REASTUDIA, Novelora, VUX Events, Kora AI, Kontyra Accounts), all internal loading states (route changes, container build, terminal execution, chapter load, button submissions) **MUST use that specific product's official logo mark and brand accent colors**.
>   - **DevOS:** Uses DevOS Slash/Terminal mark with Cyan `#13D9F2` laser contour tracing.
>   - **REASTUDIA:** Uses REASTUDIA Book mark with Sovereign Gold `#D4AF37` pulse.
>   - **Novelora:** Uses Novelora Quill/Studio mark with Literary Gold `#D4AF37` laser trace.
>   - **VUX Events:** Uses VUX Bolt/Ticket mark with Neon Pink `#E60082` sweep.
>   - **Kora AI:** Uses Kora Neural Orb mark with Deep Violet `#4B00E8`.
>   - **Kontyra Accounts:** Uses Kontyra Identity/Shield mark with Trust Emerald `#10B981`.
> - **Cross-App Handshakes:** The parent **Kontyra dual-loop logo** is reserved for cross-ecosystem SSO authorizations, gateway handoffs, and platform root boots.

### 4 Approved Kinetic Archetypes:
1. **Neural Pulse (Core Boot / Splash):** Product logo breathing (`scale(0.97)` to `scale(1.04)`) with volumetric dual-neon atmospheric glow, flanked by dual concentric orbiting photon rings.
2. **Laser Contour Trace (Execution & Terminal):** High-intensity laser beam traveling directly along the genuine SVG paths of the product's logo using synchronized `stroke-dasharray` and `stroke-dashoffset`.
3. **Chromatic Aura Sweep (Security & Authentication):** 360-degree rotating conic gradient halo tuned to the product's accent spectrum surrounding a frosted glass tile.
4. **Kinetic Micro-Loader (In-Button & Inline Badges):** 18–20px compact product emblem with subtle breathing glow for action buttons ("Compiling...", "Authenticating...", "Minting...").

---

## 6. Official Ecosystem Footer (4 Tiers)

Every web application (unless in an embedded full-screen IDE code editor) must anchor with the standard 4-column footer:
- **Products:** DevOS, Kontyra Identity, KORA AI, VUX Events, VyntaJobs, Novelora.
- **Resources:** Documentation Hub, Headless API, Official Blog, Brand System, Support.
- **Company:** About Kontyra, Ecosystem, Careers, GitHub.
- **Legal:** Privacy Policy, Terms of Service, Cookies, Security.
- **Bottom Baseline:** `© 2026 Kontyra Inc. All rights reserved. Pure Black (#000000) • Hairline Outlines • Specular Highlights`.
