# Product Implementation Instruction: VyntaJobs
## Architecture Migration, Escrow Engine, and Central Identity Alignment

> **Originating Authority**: Kontyra Engineering Governance Board  
> **Target Product**: **VyntaJobs** (`c:\Users\DELL\Documents\GitHub\Orbit`)  
> **Target Priority**: **P1 (Highest Active Development)**  
> **Instruction Status**: `Approved for Execution by VyntaJobs Product Team`

---

## 1. Executive Summary & Required State

VyntaJobs is the public employment, freelance, and contract escrow marketplace of Kontyra. The current codebase resides in directory `c:\Users\DELL\Documents\GitHub\Orbit` with `package.json` package name `vyntajobs`.

This instruction guides the dedicated product team on the architectural, brand, and identity updates necessary to meet Kontyra Enterprise Standards without breaking current functionality.

---

## 2. Mandatory Remediation Checklist for Product Team

### Phase 1: Identity & Authentication Integration
- [ ] **Remove Isolated Firebase Auth Login Flows**: Replace custom standalone email/password forms on `/login` with the standard **Kontyra Unified SSO** redirect pattern (`https://accounts.kontyra.name.ng/auth?client_id=client_vyntajobs&return_to=https://jobs.kontyra.name.ng/sso/callback`).
- [ ] **Implement SSOCallback**: Consume the custom token exchange endpoint and authenticate the user into the local Firebase instance.
- [ ] **Session Verification**: Validate JWT session freshness and store tokens in secure local state.

### Phase 2: Escrow Engine & Milestone State Machine
- [ ] **State Machine Enforcement**:
  ```
  [ Draft ] ──> [ Escrow Funded ] ──> [ Work In Progress ] ──> [ Submitted for Review ] ──> [ Completed & Disbursed ]
                       │                                                 │
                       ▼                                                 ▼
               [ Refund Initiated ]                             [ Dispute Chamber Opened ]
  ```
- [ ] **Server-Side Fund Verification**: Ensure that escrow funding status cannot be toggled by client-side Firestore writes. All payment events must be verified by server webhook (`/api/billing/paystack/webhook` or central billing gateway).

### Phase 3: Brand & UI Standard Alignment
- [ ] **Brand Tokens**: Apply the official VyntaJobs brand accent: **Escrow Amber (`#F59E0B` / `amber-500`)** across primary action CTAs and milestone badges.
- [ ] **Navigation & Header**: Adopt the standard Kontyra `56px` fixed header with the 9-dot ecosystem app switcher.
- [ ] **DevOS Badge Integration**: On candidate profiles and proposals, display verified DevOS execution badges (`username.devos.kontyra.name.ng`) linking to live project sandboxes.

### Phase 4: Testing & Verification
- [ ] Run full test suite: `npm run lint` and `npm run build`.
- [ ] Confirm zero TypeScript compilation errors.
- [ ] Update product documentation in `Kontyra-brand/product-guidelines/vyntajobs.md` with verified feature matrix.
