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
- Hamburger trigger: `p-2 text-white/80 hover:bg-white/[0.08] rounded-lg`.
- Drawer modal: Fullscreen overlay `fixed inset-0 bg-black/98 overflow-y-auto z-50`.
- Top row: Logo + close button (`X size={22}`).
- **Section 1: Ecosystem Portals (2-column grid):**
  - Instant links to `Docs`, `Blog`, `Legal`, `Console`, `DevOS`, `GitHub`.
- **Section 2: Product / Topic Directory:**
  - Full list of current portal destinations with badges and icons.
- **Section 3: Footer Contact:**
  - Official desk email and direct support line.
