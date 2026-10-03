# Kontyra Official Colour Architecture

The Kontyra design system enforces a **Three-Layer Colour Architecture** balancing a high-contrast corporate foundation with product-specific domain accents.

---

## Layer A: Corporate Foundation (Black & White Technical)

The core public surfaces adhere to a strict, modern monochrome standard:

| Token Name | HEX Value | RGB | Primary Usage |
|---|---|---|---|
| `--kontyra-bg-base` | `#000000` | `rgb(0, 0, 0)` | Root application and viewport background |
| `--kontyra-bg-surface` | `#09090b` | `rgb(9, 9, 11)` | Secondary panels, cards, and modal backdrops |
| `--kontyra-bg-overlay` | `#18181b` | `rgb(24, 24, 27)` | Elevated flyouts, dropdowns, and tooltip containers |
| `--kontyra-text-primary` | `#FFFFFF` | `rgb(255, 255, 255)` | Main headings, titles, active labels |
| `--kontyra-text-secondary`| `rgba(255,255,255,0.65)` | `rgba(255, 255, 255, 0.65)` | Body copy, descriptions, subtitles |
| `--kontyra-text-muted` | `rgba(255,255,255,0.40)` | `rgba(255, 255, 255, 0.40)` | Monospace timestamps, tags, footnotes |
| `--kontyra-border-subtle` | `rgba(255,255,255,0.08)` | `rgba(255, 255, 255, 0.08)` | Card borders, navbar divider lines |
| `--kontyra-border-hover` | `rgba(255,255,255,0.20)` | `rgba(255, 255, 255, 0.20)` | Interactive card focus, button hover borders |

---

## Layer B: Official Corporate Gradient Signature

Used specifically on the primary brand mark and select hero accents:

```css
/* Left Loop Gradient */
linear-gradient(135deg, #13D9F2 0%, #079BFF 48%, #0B45E8 100%)

/* Right Loop Gradient */
linear-gradient(135deg, #1747F2 0%, #4B00E8 38%, #B000D5 68%, #E60082 100%)
```

---

## Layer C: Product Domain Accents

Each autonomous product under the Kontyra umbrella retains its dedicated accent without compromising the parent brand:

| Platform | Product Accent | HEX | Role |
|---|---|---|---|
| **DevOS** | Runtime Electric Blue | `#079BFF` | Code status, active breakpoints, terminal prompt |
| **KORA AI** | Neural Magenta / Purple | `#B000D5` | Autonomous generation, agent indicators |
| **Identity & SSO** | Trust Emerald | `#10B981` | Biometric passkeys verified, session security |
| **VUX Events** | Ticket Coral | `#F43F5E` | Live ticket release, scanner status |
| **VyntaJobs** | Escrow Gold | `#F59E0B` | Contract escrow funded, milestone approved |
| **Console** | Neutral Platinum | `#E4E4E7` | Organization admin, tenant quotas |

---

## Layer D: Semantic System States

| State | HEX | Token |
|---|---|---|
| Success | `#10B981` | `--kontyra-status-success` |
| Warning | `#F59E0B` | `--kontyra-status-warning` |
| Destructive / Error | `#EF4444` | `--kontyra-status-error` |
| Information | `#3B82F6` | `--kontyra-status-info` |
