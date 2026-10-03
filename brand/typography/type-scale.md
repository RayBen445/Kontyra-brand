# Kontyra Typography Specification

## 1. Font Families

Kontyra prioritizes native system fidelity, rapid zero-CLS rendering, and high readability across all viewports.

### Primary Interface & Display Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
```

### Code & Monospace Stack (Terminal, Logs, API Specs)
```css
font-family: ui-monospace, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

---

## 2. Type Scale & Hierarchy

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| **Display 1** | `56px` – `72px` | `36px` – `44px` | 600 (Semibold) | `1.04` – `1.08` | `-0.035em` |
| **Heading 1** | `36px` – `48px` | `28px` – `32px` | 600 (Semibold) | `1.15` | `-0.025em` |
| **Heading 2** | `24px` – `30px` | `20px` – `24px` | 600 (Semibold) | `1.25` | `-0.02em` |
| **Heading 3** | `18px` – `20px` | `16px` – `18px` | 500 (Medium) | `1.35` | `-0.01em` |
| **Body Large** | `16px` – `18px` | `15px` – `16px` | 400 (Regular) | `1.6` | `-0.01em` |
| **Body Default** | `14px` | `14px` | 400 (Regular) | `1.5` | `normal` |
| **Caption / Subtext**| `12px` – `13px` | `12px` | 400 (Regular) | `1.4` | `normal` |
| **Mono Technical** | `10px` – `11px` | `10px` | 400 / 500 | `1.4` | `+0.05em` |

---

## 3. Editorial Standards
- Heading text uses clean sentence casing or title casing, never erratic all-caps for long paragraphs.
- Monospace labels and technical tags utilize uppercase tracking (`tracking-wider` or `+0.05em`).
- Body text maintains a contrast ratio strictly exceeding WCAG 2.2 AA standards (minimum `4.5:1` against black).
