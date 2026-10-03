# 02 - Layout, Header & Navigation Specifications

All Kontyra web applications must adhere to standard layout structures, dimensions, and responsive behaviors to guarantee consistent ergonomics across the product suite.

---

## 1. Global Navigation Standard (The 56px Header)

Every Kontyra web property features a top bar with a fixed height of **56px** (`h-14` in Tailwind).

```
+-----------------------------------------------------------------------------------------------+
| [Emblem] [Product Badge]     [Search / Command K]        [App Switcher] [Notifications] [Avatar]|
+-----------------------------------------------------------------------------------------------+
|<------------------------------------- 56px Height ------------------------------------------->|
```

### Visual Specifications
- **Height**: Exactly `56px` (`h-14`, `3.5rem`).
- **Position**: `sticky top-0 z-50` or `fixed top-0 left-0 right-0 z-50`.
- **Background**: `bg-black/80` or `bg-[#0A0A0A]/80` with `backdrop-blur-xl`.
- **Bottom Border**: `border-b border-white/[0.08]` (subtle line separating chrome from content).
- **Z-Index**: `z-50` (ensures overlays and modals render atop navigation).

### Header Elements (Left to Right)
1. **Brand Emblem**:
   - Monochromatic Kontyra icon (`kontyra-white-icon.svg`), height `20px` to `24px`.
   - Links to `https://kontyra.name.ng` or product root.
2. **Contextual Product Badge**:
   - Separator slash (`/`) in `text-white/20`.
   - Product label (e.g., `DevOS`, `Novel Weaver`, `Console`, `API`).
   - Font: `font-medium text-sm text-white/90 tracking-tight`.
3. **Global Search / Command Palette (Optional)**:
   - Centered input or `Cmd + K` trigger button with `bg-white/[0.04]` and `border border-white/[0.08]`.
4. **App Switcher Grid Icon**:
   - 9-dot grid icon opening the unified Kontyra Application Switcher drawer or popup.
5. **User Account Avatar & Dropdown**:
   - Circular avatar (`32px x 32px` or `w-8 h-8`), `rounded-full ring-1 ring-white/10`.
   - Dropdown menu includes:
     - User Full Name & `@username`
     - Link to Manage Kontyra Account (`https://accounts.kontyra.name.ng/settings`)
     - App-specific Settings
     - Support link (`https://support.kontyra.name.ng`)
     - Sign Out action

---

## 2. Page Layout Archetypes

### Archetype A: Public / Marketing Layout
- **Header**: Standard `56px` transparent or frosted navbar with navigation links (`Features`, `Docs`, `Pricing`) and a prominent CTA (`Get Started` / `Sign In with Kontyra`).
- **Container**: Max width `1280px` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- **Footer**: Unified Kontyra footer containing legal links, status indicator, and product directory.

### Archetype B: Authentication Layout
- **Appearance**: Centered, minimalist card on an ambient blurred mesh background.
- **Card Styling**: Max width `400px` to `440px`, `bg-[#0F0F0F]/90 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-8 shadow-2xl`.
- **Action**: Direct redirection to Kontyra Accounts SSO or immediate single-click Kontyra OAuth button.
- **Back navigation**: Subtle arrow returning to product homepage.

### Archetype C: Authenticated Application / Dashboard Layout
- **Header**: Fixed `56px` header.
- **Sidebar / Drawer (Collapsible)**:
  - Width: `240px` (expanded) or `64px` (collapsed icon-only).
  - Background: `bg-[#080808]` with right border `border-r border-white/[0.08]`.
- **Main Viewport**:
  - Offset top: `pt-14` (matching the 56px navbar).
  - Background: Primary dark `bg-black` or `#050505`.
  - Content padding: `p-6` or `p-8`.

---

## 3. Responsive Breakpoints & Device Adaptation

| Breakpoint | Viewport Width | Navigation Behavior | Sidebar Behavior |
| :--- | :--- | :--- | :--- |
| **Mobile (`< 640px`)** | iPhone, Android phones | Logo & avatar only; hamburger drawer toggle | Off-canvas sliding drawer (`z-50`) with backdrop overlay |
| **Tablet (`640px - 1024px`)** | iPads, foldables | Compact navigation; search collapses to icon | Icon-only collapsed rail (`64px`) or off-canvas drawer |
| **Desktop (`>= 1024px`)** | Laptops, monitors | Full navigation, search bar, app switcher | Persistent expanded sidebar (`240px`) |

---

## 4. Universal Application States

All product views must provide high-fidelity renderings for all four states:

1. **Loading State**:
   - Use skeleton pulse animations (`animate-pulse bg-white/[0.05] rounded-lg`).
   - Avoid intrusive full-screen blocking spinners when only a section is fetching.
2. **Empty State**:
   - Centered illustration or icon (`w-12 h-12 text-white/20`).
   - Clear primary action button (e.g., `Create your first project`, `Start writing`).
3. **Error State**:
   - High-contrast alert card (`bg-rose-500/10 border border-rose-500/20 text-rose-300`).
   - Meaningful error explanation with retry button.
4. **Offline / Slow Network State**:
   - Non-blocking banner at top of viewport indicating reconnect attempt.
