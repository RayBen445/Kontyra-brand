# Product Implementation Instruction: Discontinued Products (Hearth)
## Sunset Procedures, Legacy Archival, and Route Deactivation

> **Originating Authority**: Kontyra Engineering Governance Board  
> **Target Product**: **Hearth** (`hearth.kontyra.name.ng`)  
> **Target Priority**: **P4 (Formal Sunsetting & Archival)**  
> **Instruction Status**: `Approved for Execution across Ecosystem`

---

## 1. Executive Summary & Required State

**Hearth has been formally discontinued as an active Kontyra product.**

Per Kontyra Engineering Governance rules, discontinued products are never silently wiped from history, but their active services, billing subscriptions, and public links must be cleanly retired to avoid user confusion, security vulnerabilities, or wasted server compute.

---

## 2. Mandatory Sunset Checklist for Ecosystem Teams

### Phase 1: Navigation & Ecosystem Registries
- [ ] **Ecosystem Switcher (`ECOSYSTEM_APPS`)**: Remove Hearth from active 9-dot app switchers across `Kontyra Accounts`, `DevOS`, `Novelora`, and `VUX-Events`.
- [ ] **Footer Standard**: Remove Hearth from active product navigation links in `footer-standard.md`.

### Phase 2: Domain & Billing Shutdown
- [ ] **Billing Subscriptions**: In `Kontyra Accounts`, ensure any active paid tiers or subscription plans for Hearth are disabled and recurring charges canceled.
- [ ] **DNS / Hosting Status**: The domain `hearth.kontyra.name.ng` should either serve a graceful sunset notice explaining the product retirement or issue an HTTP 410 (Gone) status code.

### Phase 3: Historical Archival
- [ ] The original repository and design documentation are preserved read-only in the company archives for historical, design pattern, and patent reference.
- [ ] No further development, dependencies updates, or feature additions will be allocated to Hearth.
