# Standard 08: Universal Mobile Navigation Standard

This document establishes the mandatory visual, dimensional, and behavioral specification for mobile navigation across all Kontyra products (DevOS, REASTUDIA, Novelora, Accounts, Kora AI, VUX Events).

---

## 1. Specification & Dimensions

| Property | Value | Tailwind Class | Notes |
| :--- | :--- | :--- | :--- |
| **Mobile Bar Height** | `56px` | `h-14` / `min-h-[56px]` | Flush edge-to-edge compact header on phones |
| **Desktop Bar Height** | `64px` | `h-16` | Standard top application bar |
| **Drawer Max Width** | `352px` | `w-84 max-w-[88vw]` | Right-anchored slide-over on viewports `< 768px` |
| **Background Color** | Pure Black (`#000000` / `#070707`) | `bg-black/85 backdrop-blur-xl` | High contrast, deep OLED blacks |
| **Border Boundary** | Hairline 1px | `border-b border-white/[0.08]` | Subdued boundaries without heavy cards |
| **Ecosystem Launcher** | 9-Dot Bento (`LayoutGrid`) | `w-4 h-4 text-zinc-300` | Mandatory in top bar across all Kontyra apps |

---

## 2. Mandatory Structural Anatomy

1. **Top Mobile Bar (`< 768px`)**:
   - **Left**: Official SVG or Monogram icon (`w-8 h-8 rounded-xl`) + Product Name + Product Accent Badge (e.g. `DevOS` in Cyan `#13D9F2`, `REASTUDIA` in Gold `#D4AF37`, `Accounts` in Emerald `#10B981`).
   - **Right**:
     - Action Slot (optional: search, credits, notifications).
     - **9-Dot Ecosystem Launcher (`LayoutGrid`)**: Opens the 8-app frosted bento popover grid.
     - **Hamburger Toggle (`Menu` / `X`)**: Triggers the slide-over drawer with spring transition.

2. **Mobile Slide-Over Drawer**:
   - **Header**: Brand mark + App Name + Close button (`X`).
   - **Categorized Link Groups**: Grouped with monospace uppercase headers (`text-[10px] font-mono text-zinc-500 uppercase tracking-wider`).
   - **Active State Indicator**: Left border pill (`w-1 h-5 rounded-r-full`) matching the application's signature accent color with a subtle glow, accompanied by active white typography.
   - **Bottom User Card**:
     - User Avatar (or typographic monogram) with colored hairline ring.
     - User Display Name and Tier/Role badge (e.g. `Kontyra Pro`, `Super Admin`, `Platform Reader`).
     - Quick Action (Sign In CTA or Sign Out icon button).

---

## 3. Product Accent Colors

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

## 4. Reusable Component Reference

The canonical component is maintained in:
`design-system/navigation/MobileNavbar.tsx`

Import and drop directly into any Vite, Next.js, or React app:
```tsx
import { MobileNavbar } from '@/design-system/navigation/MobileNavbar';

<MobileNavbar
  appName="DevOS"
  appBadge="Cloud IDE"
  accentColor="#13D9F2"
  navGroups={NAV_GROUPS}
  user={currentUser}
  onSignOut={handleSignOut}
/>
```
