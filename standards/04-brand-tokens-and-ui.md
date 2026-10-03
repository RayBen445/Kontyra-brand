# 04 - Brand Tokens & UI Foundations

## 1. Color Palette & Dark-Mode Tokens

The Kontyra visual language is refined, high-contrast, and dark-mode native. Surfaces layer subtle luminosity on deep obsidian backgrounds.

### Core Hex Palettes
| Token Name | Hex Code | Utility / Context |
| :--- | :--- | :--- |
| `--kontyra-bg-base` | `#000000` | True black canvas / Root background |
| `--kontyra-bg-surface-0` | `#0A0A0A` | Top-level card backgrounds |
| `--kontyra-bg-surface-1` | `#111111` | Nested cards, panels, sidebars |
| `--kontyra-bg-surface-2` | `#1A1A1A` | Hover states, active inputs, dropdowns |
| `--kontyra-border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard borders (`border-white/[0.08]`) |
| `--kontyra-border-medium` | `rgba(255, 255, 255, 0.15)` | Card boundaries, focused outlines |
| `--kontyra-text-primary` | `#FFFFFF` | Headlines, primary interactive labels |
| `--kontyra-text-secondary`| `rgba(255, 255, 255, 0.70)` | Explanatory copy, secondary body text |
| `--kontyra-text-muted` | `rgba(255, 255, 255, 0.40)` | Timestamps, placeholder labels |
| `--kontyra-brand-accent` | `#6366F1` | Primary indigo accent (or product-specific accent) |

---

## 2. Typography Scale

Kontyra uses clean neo-grotesque or geometric sans typography (**Satoshi**, **Geist Sans**, or system `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`).

| Level | Size | Weight | Tracking | CSS Equivalent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `48px - 64px` | Bold (`700`) | `-0.03em` | `text-5xl font-bold tracking-tight` |
| **Heading 1**| `32px` | Bold (`700`) | `-0.025em`| `text-3xl font-bold tracking-tight` |
| **Heading 2**| `24px` | SemiBold (`600`)| `-0.02em` | `text-2xl font-semibold tracking-tight` |
| **Heading 3**| `18px` | SemiBold (`600`)| `-0.015em`| `text-lg font-semibold` |
| **Body Large**| `16px` | Regular (`400`)| Normal | `text-base text-white/80` |
| **Body Regular**| `14px`| Regular (`400`)| Normal | `text-sm text-white/70` |
| **Caption / Badge**| `12px`| Medium (`500`)| `+0.01em` | `text-xs font-medium text-white/50` |

---

## 3. Surface & Glassmorphism Rules

- **Standard Backdrop Filter**: `backdrop-blur-xl` or `backdrop-blur-md`.
- **Frosting Layer**: Use `rgba(10, 10, 10, 0.8)` or `rgba(0, 0, 0, 0.75)` over translucent glass.
- **Glass Card Utility Class**:
```css
.kontyra-glass-card {
  background-color: rgba(15, 15, 15, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

---

## 4. Reusable Component Rules

1. **Buttons**:
   - Primary: White solid background (`bg-white text-black font-medium hover:bg-neutral-200 transition-colors`).
   - Secondary: Subtle translucent glass (`bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1]`).
   - Ghost: Transparent background (`text-white/70 hover:text-white hover:bg-white/[0.05]`).
   - Danger: Tinted crimson (`bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20`).
2. **Form Controls**:
   - Background: `bg-white/[0.03]`.
   - Border: `border border-white/[0.1] focus:border-white/30 focus:ring-1 focus:ring-white/30`.
   - Padding: `px-3.5 py-2 text-sm`.
   - Corner Radius: `rounded-lg` (`8px`).
