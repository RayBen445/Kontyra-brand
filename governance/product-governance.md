# Kontyra Ecosystem Product Governance
## Product Roles, Lifecycle States, Boundaries, and Alignment Instructions

> **Authoritative Specification — Kontyra Product Leadership**  
> Scope: **Complete Ecosystem Portfolio**  
> Document Version: `1.0.0` • Effective Date: `2026-11-19`

---

## 1. Official Product Portfolio Matrix

| Product | Brand Division | Status | Repository / Path | Primary Domain | Core Architecture |
|---|---|---|---|---|---|
| **VyntaJobs** | Freelance Escrow & Talent Marketplace | `Active (Priority 1)` | `Orbit` (renaming required) | `jobs.kontyra.name.ng` | React 19 + Express + Firebase + Gemini AI |
| **DevOS** | Cloud IDE & Code Execution Platform | `Active (Maintenance/Stable)` | `DevOS-Code-Execution-Platform` | `devos.kontyra.name.ng` | Vite + React + Monaco + Firebase + Sandboxes |
| **Kontyra Identity** | Universal Accounts & SSO Authority | `Active (Core Platform)` | `Kontyra Accounts` | `accounts.kontyra.name.ng` | Next.js 15 (App Router) + Firebase Admin + Resend |
| **VUX Events** | Developer Summits & Community Tickets | `Active` | `VUX-Events` | `vux.kontyra.name.ng` | Vite + React + Firebase + QR Check-in |
| **KORA AI** | Proprietary Foundation Model Family | `Active (Internal Engine)` | `Kora-by-Kontyra` | `kora.kontyra.name.ng` | Python (FastAPI) + Supabase + PyTorch |
| **REASTUDIA** | Literary Salon & Reader Platform | `Active` | `Web-Novel-` | `reastudia.kontyra.name.ng` | Vite + React + Cloudflare R2 + Firebase |
| **Novelora** | Manuscript Authoring Studio | `Active` | `Novel-Weaver-` | `novelora.kontyra.name.ng` | Vite + React + Cloudflare R2 + Firebase |
| **Hearth** | Social Audio Community | `Discontinued` | `Hearth` (Archived) | `hearth.kontyra.name.ng` | Discontinued product. Maintained in archives only. |

---

## 2. Product-Specific Strategic Directives

### A. VyntaJobs
- **Strategic Mandate**: Public multi-tenant employment and freelance marketplace. Serves job seekers, freelancers, and hiring organizations globally. Must remain strictly separate from internal Kontyra recruitment.
- **Top Priority**: Highest active development priority in Q4 2026.
- **Technical Action Instruction for Product Team**:
  1. The codebase currently resides under directory name `Orbit` (with `package.json` name `vyntajobs`). The repository naming and public links must be unified under `VyntaJobs`.
  2. Implement server-side milestone escrow states: `FundsLocked` → `MilestoneSubmitted` → `DeliverableApproved` → `FundsDisbursed`.
  3. Enforce strict SSO authentication via `Kontyra Accounts` (`auth.kontyra.name.ng`).

### B. DevOS Platform
- **Strategic Mandate**: Existing product is feature-rich, high-performing, and considered operational and stable for current platform requirements.
- **Top Priority**: Stability, maintenance, zero breaking changes to existing IDE workflows.
- **AI Gateway Directive**:
  1. Introduce DevOS AI via a **provider-independent gateway**.
  2. Support Bring-Your-Own-Key (BYOK) for developers.
  3. Default managed model: **Qwen** (subject to latency/concurrency evaluation).
  4. Design internal hooks to allow KORA AI to become a native backend provider once production inference standards are certified.

### C. Kontyra Identity (`Kontyra Accounts`)
- **Strategic Mandate**: The sovereign identity and authentication root for all Kontyra properties.
- **Security Invariant**: Authentication does *not* automatically grant application-level authorization. Products must manage their own role-based or attribute-based access controls (RBAC/ABAC) internally using claims issued by Accounts.
- **Dual-Key Resend**: Must remain isolated to `auth.kontyra.name.ng` via Account A (`re_MfeCYJjw_...`).

### D. VUX Events
- **Strategic Mandate**: Developer conference ticketing, CFP management, and live attendee check-in.
- **Governance Invariant**: Official documentation must never claim unverified features (e.g., automated seating AI or physical NFC integration) until verified and live.

### E. KORA AI
- **Strategic Mandate**: Proprietary intelligence and reasoning family designed exclusively to power internal and authenticated Kontyra ecosystem workflows.
- **Security Boundary**: **No unrestricted public API or consumer endpoint.** All inference calls must pass through authenticated gateway services with quota tracking and mutual authentication.

### F. Discontinued Products: Hearth
- **Status**: Formally **Discontinued**.
- **Action**: All navigation references, active API routes, and billing offerings for Hearth must be removed or marked with HTTP 410 / Deprecation warnings. Historical specs and post-mortems must be preserved in `Kontyra-brand/product-guidelines/archive/hearth.md`.
