# Apple Pure Black Minimalist UI Components

> **Official Kontyra Brand Specification & Design System Standard**  
> Component Library: **Kontyra Core UI / Modern Minimalism**  
> Target Frameworks: **React, Next.js, Vite & Tailwind CSS**

---

## 1. Aesthetic Foundations

The Kontyra design aesthetic is rooted in absolute black surfaces, precision hairline outlines, and responsive glass overlays:

- **Absolute Black Base:** `#000000` (Never deep gray `#1a1a1a` for root containers).
- **Surface Elevation 1 (Nav, Sidebar, Rails):** `#0A0B10`
- **Surface Elevation 2 (Cards, Dialogs, Modals):** `#12131A`
- **Subtle Hairline Borders:** `1px solid rgba(255, 255, 255, 0.08)` (`border-white/[0.08]`).
- **Interactive Hover Glass:** `bg-white/[0.02]` to `bg-white/[0.05]`.
- **Active Selection Glass:** `bg-white/[0.08]` with `border-white/20`.

---

## 2. Component Specifications

### A. Primary Action Buttons
Pill buttons featuring high-contrast blue or brand accent gradient, subtle inner specular highlights, and active micro-scaling:
```tsx
<button className="px-5 py-2.5 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium text-sm transition-all active:scale-95 shadow-[0_4px_16px_rgba(37,99,235,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] border border-blue-400/30">
  Action Label
</button>
```

### B. Secondary / Ghost Buttons
Low-profile subtle buttons matching hairline borders:
```tsx
<button className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/[0.08] font-medium text-xs transition-all active:scale-95">
  Cancel / Secondary
</button>
```

### C. Glass Modal & Dialog Containers
High-elevation modal overlays featuring backdrop blur and centered scale animation:
```tsx
<div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
  <div className="w-full max-w-xl rounded-2xl bg-[#0A0B10] border border-white/[0.1] shadow-2xl p-6 relative overflow-hidden">
    {/* Subtle gradient accent glow */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60" />
    {/* Modal Content */}
  </div>
</div>
```

### D. Input Fields & Form Controls
Deep inset inputs with zero outline clutter and crisp focus states:
```tsx
<input 
  type="text"
  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono"
/>
```

### E. Status & Pill Badges
High-legibility miniature pill badges:
- **Success / Live:** `bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium flex items-center gap-1.5`
- **Preview / Staging:** `bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium`
- **Error / Offline:** `bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium`

### F. Floating Command Palette (`Cmd + K`)
Persistent keyboard-driven global action launcher:
- Position: Fixed top `18%`, centered horizontally.
- Dimensions: `max-w-2xl w-full`.
- Backdrop: Deep blur `bg-[#0A0B10]/95 backdrop-blur-2xl border border-white/[0.12]`.
- Input: Borderless text search with leading search icon.
- Sections: Grouped by category (`Navigation`, `Actions`, `Projects`, `Settings`) with keyboard shortcuts displayed in kbd chips (`kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/50"`).

---

## 3. Toast & Micro-Interaction Standards (Sonner)

All notifications within Kontyra applications leverage rich dark toasts positioned at `top-right`:
- **Theme:** `dark`
- **Duration:** 3500ms for confirmations, 6000ms for errors with action buttons.
- **Icons:** Embedded Lucide icons matching status colors.
