# Kontyra Standard Footer System

## 1. Overview
The Kontyra footer serves as the consistent anchor across all ecosystem portals, granting immediate access to platform services, developer documentation, governance policies, and company status.

> **Guiding Principle:** One shared structural layout with product-configurable links. Avoid duplicate or irrelevant links across domain-specific applications.

---

## 2. Anatomy & Hierarchy

The footer layout consists of three standard horizontal tiers:

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Kontyra Logo]                                                         │
│ Building Innovations, Leading Technology.                              │
│                                                                        │
│ Products          Resources           Company             Legal        │
│ • DevOS           • Documentation     • About Kontyra     • Privacy    │
│ • Identity        • Blog              • Ecosystem         • Terms      │
│ • KORA AI         • Support           • Careers           • Cookies    │
│ • VUX Events      • Brand Center                                       │
│ • VyntaJobs       • Contact                                            │
│ • Explore all →                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ © 2026 Kontyra. All rights reserved.          Built for what's next.   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Core Footer Columns & Standard Targets

### Column 1: Products
- **DevOS Cloud Runtime:** `https://docs.kontyra.name.ng/devos` (or app link)
- **Kontyra Identity & SSO:** `https://accounts.kontyra.name.ng`
- **KORA AI Transformer:** `https://docs.kontyra.name.ng/kora`
- **VUX Events & Tickets:** `https://docs.kontyra.name.ng/vux`
- **VyntaJobs Marketplace:** `https://jobs.kontyra.name.ng`
- **Explore All Products →:** `/products`

### Column 2: Resources
- **Documentation Hub:** `https://docs.kontyra.name.ng`
- **Official Blog:** `https://blog.kontyra.name.ng`
- **Customer Support Desk:** `/help` or `mailto:support@kontyra.name.ng`
- **Brand & Design System:** `/brand`
- **Contact:** `/contact`

### Column 3: Company
- **About Kontyra:** `/about`
- **Our Ecosystem:** `/products`
- **Careers:** `/careers`

### Column 4: Legal
- **Privacy Policy:** `https://legal.kontyra.name.ng/privacy`
- **Terms of Service:** `https://legal.kontyra.name.ng/terms`
- **Cookie Policy:** `https://legal.kontyra.name.ng/cookies`

---

## 4. Implementation Rules

1. **Strict Contrast & Monochrome Theme:**
   - Dark surfaces use `--kontyra-bg-base` (`#000000`) with `--kontyra-border-subtle` (`rgba(255, 255, 255, 0.08)`).
   - Light surfaces use `#ffffff` with `#000000` text and black logo.
2. **Context-Sensitive Reductions:**
   - **Main Website (`kontyra.name.ng`):** Renders the complete 4-column footer.
   - **Focused Tools (e.g. Monaco Editor, Passkey Modal, Ticket Scanner):** Use a collapsed minimal single-row footer or omit completely to maximize interactive workspace.
3. **No Dead Links:**
   - Only link to active, reachable routes. Any route still under staging must be concealed or redirected.
4. **Outbound External Icons:**
   - Subdomain transitions to Docs, Legal, Blog, or Console should display a subtle `ArrowUpRight` icon (`size={10} opacity-60`).
