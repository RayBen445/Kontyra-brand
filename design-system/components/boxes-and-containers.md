# Boxes, Containers & Surfaces Specification

> **Kontyra Design System v2.1**  
> Unified specification for boxes, surfaces, cards, containers, elevation hierarchy, and specular highlights across all Kontyra applications.

---

## 1. Core Architectural Principles

1. **Pure Black Canvas Baseline (`#000000`)**:
   The viewport background of all Kontyra products is pure void black (`#000000`), never dark grey. Containers elevate from this ground layer through subtle lightness shifts, specular highlights, and hairline borders.
2. **Hairline Borders (`border-white/[0.08]`)**:
   Boxes are defined by a crisp 1px border. Never use thick or colored borders for standard surfaces. Focus or active states brighten to `rgba(255, 255, 255, 0.20)`.
3. **Inner Specular Highlights (`inset 0 1px 0 rgba(255, 255, 255, 0.08)`)**:
   Physical realism in high-end dark mode comes from the top specular edge catch reflection, not from heavy drop shadows.
4. **Purpose-Driven Radius Hierarchy**:
   - `4px` (`--kontyra-radius-sm`): Badges, tooltips, tags.
   - `8px` (`--kontyra-radius-md`): Buttons, form inputs, code wells, callouts.
   - `12px` (`--kontyra-radius-lg`): Standard surface cards, ecosystem tiles, KPI blocks.
   - `16px` (`--kontyra-radius-xl`): Floating modals, slide-over panels, popover menus.
   - `24px` (`--kontyra-radius-2xl`): Hero spotlight banners, featured showcase containers.

---

## 2. Standard Box Types & Layout Patterns

### A. Standard Surface Card (Default Box)
Used for dashboard widgets, content lists, configuration sections, and profile panels.

```html
<!-- HTML / Tailwind -->
<div class="bg-[#09090b] border border-white/[0.08] rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]">
  <h3 class="text-white text-sm font-semibold tracking-tight">Active API Keys</h3>
  <p class="text-white/65 text-xs mt-1">Manage production keys and service roles.</p>
</div>
```

```css
/* CSS Token Usage */
.kontyra-card {
  background: var(--kontyra-box-bg-surface);
  border: var(--kontyra-box-border-hairline);
  border-radius: var(--kontyra-box-radius-card);
  padding: var(--kontyra-box-padding-md);
  box-shadow: var(--kontyra-shadow-elevation-1);
}
```

---

### B. Interactive Action / Ecosystem App Card
Used for interactive cards, app launchers (DevOS, Vux, Novelora), template cards, and navigation grids. Must include hover lift and top-border specular glow.

```html
<!-- HTML / Tailwind -->
<a href="https://devos.kontyra.name.ng" 
   class="group relative flex flex-col justify-between bg-[#09090b] hover:bg-[#111116] border border-white/[0.08] hover:border-white/[0.25] rounded-xl p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
  
  <!-- Top Specular Highlight Edge -->
  <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  
  <div class="flex items-center justify-between">
    <div class="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
      <!-- Icon -->
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    </div>
    <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LIVE</span>
  </div>

  <div class="mt-4">
    <h4 class="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">Kontyra DevOS</h4>
    <p class="text-white/60 text-xs mt-1">Autonomous workspace and developer environment.</p>
  </div>
</a>
```

---

### C. Inset Well / Code Box
Used for code blocks, terminal outputs, API key display fields, and read-only token previews. Distinctly recessed below the canvas surface.

```html
<!-- Inset Well / Token Display Box -->
<div class="bg-[#050508] border border-white/[0.06] rounded-lg px-4 py-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)] flex items-center justify-between font-mono text-xs">
  <span class="text-white/80 select-all truncate">kt_live_98a72f01d4c2e684...</span>
  <button class="text-white/50 hover:text-white transition-colors ml-3 text-[11px] font-sans">Copy</button>
</div>
```

---

### D. KPI / Metric Stat Box
Used across dashboards and analytics to display key metrics (API latency, monthly compute, active users).

```html
<div class="bg-[#09090b] border border-white/[0.08] rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
  <div class="flex items-center justify-between">
    <span class="text-xs font-medium text-white/50 uppercase tracking-wider">P95 Latency</span>
    <span class="text-[11px] font-mono text-emerald-400">-12ms</span>
  </div>
  <div class="mt-2 text-2xl font-semibold tracking-tight text-white font-mono">
    48<span class="text-sm text-white/40 font-sans ml-0.5">ms</span>
  </div>
  <div class="mt-3 text-[11px] text-white/40">Measured across 1.2M public API requests</div>
</div>
```

---

### E. Modal / Dialog Floating Container
Floating top-layer dialog for confirmations, authentication challenges, or quick-creation workflows.

```html
<!-- Backdrop -->
<div class="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
  <!-- Container Box -->
  <div class="w-full max-w-lg bg-[#0e0e13] border border-white/[0.12] rounded-2xl p-7 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.12)]">
    <div class="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
      <h3 class="text-base font-semibold text-white">Create New API Secret</h3>
      <button class="text-white/40 hover:text-white transition-colors">✕</button>
    </div>
    
    <div class="space-y-4">
      <!-- Input Box -->
      <div>
        <label class="block text-xs font-medium text-white/70 mb-1.5">Key Label</label>
        <input type="text" placeholder="e.g. Production Cluster A" 
               class="w-full bg-[#050508] border border-white/[0.10] focus:border-white/30 rounded-lg px-3.5 py-2 text-sm text-white placeholder-white/20 focus:outline-none transition-all" />
      </div>
    </div>
    
    <div class="flex justify-end gap-3 mt-6 pt-4 border-t border-white/[0.08]">
      <button class="px-4 py-2 rounded-lg text-xs font-medium text-white/60 hover:text-white transition-colors">Cancel</button>
      <button class="px-4 py-2 rounded-lg text-xs font-medium bg-white text-black hover:bg-white/90 transition-colors">Generate Key</button>
    </div>
  </div>
</div>
```

---

### F. Callout / Notice Box
Used for system warnings, informational banners, rate limit reminders, or maintenance notices.

```html
<!-- Info Callout -->
<div class="bg-white/[0.02] border border-white/[0.08] rounded-lg p-3.5 flex items-start gap-3 text-xs text-white/75">
  <div class="w-4 h-4 mt-0.5 text-cyan-400 shrink-0">ℹ</div>
  <div>
    <span class="font-semibold text-white">Headless API Notice:</span>
    Direct browser visits to <code class="font-mono text-white/90">api.kontyra.name.ng</code> automatically redirect to Kontyra Accounts. API clients should call <code class="font-mono text-white/90">/v1/*</code> endpoints directly.
  </div>
</div>
```

---

## 3. Elevation & Specular Reference

| Level | Purpose | Background | Border | Box Shadow & Specular |
| :--- | :--- | :--- | :--- | :--- |
| **0 (Canvas)** | Body viewport | `#000000` | None | None |
| **Inset** | Code blocks, inputs, wells | `#050508` | `border-white/[0.06]` | `inset 0 2px 4px rgba(0, 0, 0, 0.7)` |
| **1 (Cards)** | Standard content cards, lists | `#09090b` | `border-white/[0.08]` | `0 1px 2px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)` |
| **2 (Interactive)** | Hovered cards, dropdown menus | `#111116` | `border-white/[0.18]` | `0 4px 16px -2px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)` |
| **3 (Elevated)** | Sticky bars, drawer trays | `#12131a` | `border-white/[0.12]` | `0 12px 32px -8px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.12)` |
| **4 (Floating)** | Modals, command palettes | `#0e0e13` | `border-white/[0.14]` | `0 24px 64px -12px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.15)` |

---

## 4. Developer Quick Reference (Tailwind Classes)

- **Default Card**: `bg-[#09090b] border border-white/[0.08] rounded-xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`
- **Interactive Card**: `group bg-[#09090b] hover:bg-[#111116] border border-white/[0.08] hover:border-white/[0.22] rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5`
- **Recessed Well**: `bg-[#050508] border border-white/[0.06] rounded-lg p-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)] font-mono`
- **Modal Dialog**: `bg-[#0e0e13] border border-white/[0.12] rounded-2xl p-6 shadow-2xl`
