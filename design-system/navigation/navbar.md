# Kontyra Navigation Standard

The shared navigation bar is the central unifying touchpoint across all Kontyra websites, documentation, and product consoles.

---

## 1. Dimensional Standard
- **Height:** Exactly `56px` (`h-14` in Tailwind).
- **Position:** `sticky top-0` or `fixed top-0` with `z-50`.
- **Background:** `bg-black/80 backdrop-blur-xl`.
- **Border:** `border-b border-white/[0.08]`.
- **Max Width:** `max-w-7xl mx-auto px-4 sm:px-6`.

---

## 2. Desktop Bar Anatomy

1. **Brand Mark (Left):**
   - Official SVG icon: `w-7 h-auto object-contain` linking to root `/`.
   - Text label: `font-medium text-white text-sm tracking-tight`.
   - Domain Badge: Pill badge (e.g. `Systems`, `Docs`, `Editorial`, `Governance`) with `text-[10px] font-mono text-white/50 border border-white/[0.08] bg-white/[0.06] px-2 py-0.5 rounded-full`.

2. **Primary Navigation Links (Center / Right):**
   - Font: `text-[13px] font-normal text-white/60 hover:text-white transition`.
   - Spacing: `gap-6`.

3. **Ecosystem Cross Links:**
   - Separated by vertical subtle divider: `h-4 w-px bg-white/[0.1]`.
   - Outbound ecosystem links feature `ArrowUpRight` (`size={12} opacity-60`).

---

## 3. Mobile Navigation Drawer Standard

When viewport width `< 768px` (or `< 1024px` where appropriate):
- **Modern Ecosystem Launcher Trigger (App Grid / Bento or Asymmetric Dual-Dash):**
  Never use a generic 3-line hamburger menu icon. Kontyra uses an Apple/Vercel-inspired 4-square Bento App Grid (`2x2` micro-squares with hairline borders: `w-4 h-4 grid grid-cols-2 gap-1`) or an Asymmetric Segmented Dash (`w-5 flex flex-col items-end gap-1.5` with offset widths `w-5` and `w-3.5`).
  Trigger container: `p-2 text-white/80 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] rounded-lg transition-all`.
- Drawer modal: Fullscreen overlay `fixed inset-0 bg-black/98 overflow-y-auto z-50`.
- Top row: Logo + close button (`X size={22}`).
- **Section 1: Ecosystem Portals (2-column grid):**
  - Instant links to `Docs`, `Blog`, `Legal`, `Console`, `DevOS`, `GitHub`.
- **Section 2: Product / Topic Directory:**
  - Full list of current portal destinations with badges and icons.
- **Section 3: Footer Contact:**
  - Official desk email and direct support line.


---

## 4. Modern Editorial & Studio Dual-Navigation (REASTUDIA & Novelora Standard)

For media-rich, literary, and creator products (such as **REASTUDIA** and **Novelora**), the navigation evolves into the **Modern TopBar + Collapsible Desktop Sidebar** architecture to support deep catalog navigation and distraction-free viewing.

### A. Dimensional Specifications
- **TopBar Height:** `68px` to `76px` desktop (`min-h-[68px] sm:min-h-[76px]`), `60px` mobile.
- **TopBar Background:** `#050505/95` with `backdrop-blur-md`.
- **TopBar Border:** `border-b border-[#1F1F1F]` (editorial rule hairline).
- **Container Width:** `max-w-[1920px] mx-auto w-full px-4 sm:px-6 lg:px-8`.
- **Sidebar Width:** Exactly `256px` (`w-64`).
- **Sidebar Background:** `#070707` with `border-r border-[#222222]`.
- **Sidebar Offset:** Top offset locked to TopBar height (`top-[68px] sm:top-[76px]`).

### B. TopBar Anatomy (Three Strategic Zones)

1. **Zone 1: Sidebar Toggle & Brand Lockup (Left)**
   - **Collapsible Toggle:** Keyboard & click toggle button (`36px x 36px` / `w-9 h-9`) with `PanelLeftClose` / `PanelLeftOpen` icon (`stroke-[1.75]`), border `#222222`, hover border `#333333`.
   - **Brand Monogram:** `32px` square logo image or typographic monogram (`w-8 h-8 rounded-sm`).
   - **Product Wordmark:** Uppercase serif display font (`Cinzel` or serif), tracking `0.16em`, with uppercase subtitle (`tracking-[0.25em] text-[8px] text-[#888888]`).

2. **Zone 2: Contextual Breadcrumb & Ecosystem Bridge (Center)**
   - **Active Section Pill:** Rounded-full pill (`bg-[#111111] border border-[#222222]`) displaying `/ Section / [Current Route]` with uppercase mono category prefix.
   - **Pill Navigation Tabs:** Compact segmented control (`bg-[#0D0D0D] border border-[#222222] p-1 rounded-full`). Active tab uses solid high-contrast pill (`bg-white text-black font-semibold shadow-sm`).
   - **Cross-Ecosystem Bridge Button:** Direct pill linking the reader and author platforms (e.g. *"Read on REASTUDIA"* or *"Author on Novelora"*) with gold book icon and `ExternalLink`.

3. **Zone 3: Role-Aware Account Controls (Right)**
   - **Admin Studio Badge:** Highlighted in gold (`bg-[#D4AF37] text-black` when active, or dark gold border `border-[#5E4D17]` with gold shield icon) for verified ecosystem administrators.
   - **User Menu / SSO Pill:** Rounded-lg pill displaying user avatar monogram + truncated pen name/email, with dropdown menu for account settings, codex hub, and sign out.
   - **Sign In CTA:** High-contrast editorial button (`bg-white text-black font-semibold text-xs rounded-lg uppercase tracking-wider`).

### C. Collapsible Desktop Sidebar Anatomy (Right of Viewport Shift)
- **Smooth Page Layout Shift:** The `<main>` and `<footer>` containers shift smoothly via `transition-[padding-left] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]` (`lg:pl-64` when open, `pl-0` when closed).
- **Navigation Sections:**
  - Header with section title (`text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#666666]`) and count badge.
  - Active items highlight in solid white with black text and drop shadow (`bg-white text-black font-semibold shadow-md`).
  - Account & Studio settings direct navigation links.
  - Sidebar bottom bar with active user indicator and version tag.
