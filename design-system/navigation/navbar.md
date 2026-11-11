# Kontyra Navigation Standard

The shared navigation bar is the central unifying touchpoint across all Kontyra websites, documentation, and product consoles.

---

## 1. Unified Dimensional Standard
- **Desktop Standard:** Exactly `48px` height (`h-12` in Tailwind) — **Archetype 2: Flush Edge-to-Edge Minimal Header**.
- **Mobile Standard:** Exactly `44px` height (`h-11` in Tailwind) — **Archetype 3: Bento Grid Quick-Launcher**.
- **Position:** `sticky top-0` or `fixed top-0` with `z-50`.
- **Background:** `bg-black/85 backdrop-blur-xl`.
- **Border:** Pure hairline boundary `border-b border-white/[0.08]`.
- **Space Efficiency Rule:** **Zero heavy container boxes around links**. Navigation links are rendered as pure typography with negative space. Active items receive a micro live indicator dot (`w-1.5 h-1.5 rounded-full bg-[#10B981]`) or clean underline.

---

## 2. Desktop Bar Anatomy (Option 2: Flush Minimal 48px)

1. **Brand Lockup & Breadcrumb Context (Left):**
   - Official SVG vector icon: `w-6 h-6 object-contain` linking to `/`.
   - Brand Wordmark: `font-bold text-white text-xs tracking-tight`.
   - Delimiter: `text-white/20 select-none` (`/`).
   - Active App / Module title: `text-xs font-semibold text-white/90` (e.g. `DevOS`, `Accounts`, `Docs`).
   - App Signature Badge: `text-[10px] font-mono px-2 py-0.5 rounded-full` matching the app's signature accent color (e.g. Emerald `#10B981` for Accounts SAML, Cyan `#13D9F2` for DevOS).

2. **Primary Navigation Links (Center):**
   - Plain text typography: `text-xs font-medium text-white/60 hover:text-white transition-colors duration-150`.
   - Spacing: `gap-6` or `gap-8`.
   - Active link state: `text-white font-semibold flex items-center gap-1.5` accompanied by an emerald live indicator dot: `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>`.
   - **Zero container boxes around links**.

3. **Global Controls & Identity (Right):**
   - Quick search / palette shortcut (optional): `⌘K`.
   - Secondary action: `text-xs text-white/60 hover:text-white`.
   - Ecosystem Bento Launcher trigger: `2x2` micro-squares (`16px x 16px`) for rapid app switching.
   - User Avatar or Sign In CTA: High-contrast compact button (`h-8 px-3 rounded-lg text-xs font-semibold`).

---

## 3. Mobile Navigation Standard (Option 3: Bento Quick-Launcher 44px)

When viewport width `< 768px` (or `< 1024px` where appropriate):
- **Bar Height:** Locked to `44px` (`h-11`) to maximize vertical viewport on phones.
- **Left:** Monogram/Brand mark + Active app title.
- **Center:** Kept **completely empty** to avoid horizontal cramping.
- **Right: 4-Square Bento Launcher Button (`㗊`):**
  - Trigger: `w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center`.
  - Micro-grid: `w-3.5 h-3.5 grid grid-cols-2 gap-[3px]` with app brand colors (`#13D9F2`, `#10B981`, `#4B00E8`, `#E60082`).
- **Bento Popover / Drawer:**
  - Tapping opens a sleek frosted-glass popover card (`backdrop-blur-2xl bg-black/95 border border-white/10 rounded-2xl p-4`).
  - Displays all 6+ ecosystem destinations in a compact 2-column tile grid:
    1. **DevOS:** Cloud IDE & Execution
    2. **Accounts:** Universal SAML 2.0 & Passkeys
    3. **KORA AI:** Deep Intelligence & Reasoning
    4. **VUX Events:** Experience Platform
    5. **Novelora:** Literary Publishing Studio
    6. **Developer API:** Terminal & Bearer Secrets

---

## 4. Modern Editorial & Studio Dual-Navigation (REASTUDIA & Novelora Standard)

For media-rich, literary, and creator products (such as **REASTUDIA** and **Novelora**), the navigation pairs the top minimal bar with a collapsible sidebar:
- **TopBar Height:** Flush `48px` desktop, `44px` mobile.
- **Sidebar Width:** Exactly `256px` (`w-64`).
- **Sidebar Offset:** Top offset locked to TopBar height (`top-12`).
- **Sidebar Content:** Table of Contents, Character Graph, Active drafts, and Chapter metadata.
