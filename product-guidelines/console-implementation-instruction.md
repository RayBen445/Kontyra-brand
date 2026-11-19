# Product Implementation Instruction: Kontyra Console
## Central Cloud Administration, Multi-Tenant RBAC, API Key Governance, and Quotas

> **Originating Authority**: Kontyra Engineering Governance Board  
> **Target Product**: **Kontyra Console** (`console.kontyra.name.ng`)  
> **Target Priority**: **P1 (Enterprise Management & Infrastructure Control Plane)**  
> **Instruction Status**: `Approved for Execution by Console Product Team`

---

## 1. Executive Summary & Required State

Kontyra Console (`console.kontyra.name.ng`) is the centralized administrative control plane for teams, enterprise organizations, and developers managing cloud resources across the Kontyra ecosystem. It oversees multi-tenant organizations, granular API key provisioning, rate limits, infrastructure quotas, team member roles, and tamper-evident audit logs.

**Governing Brand Law**:
- **Canvas Aesthetic**: Pure OLED Black (`#000000`) with hairline 1px borders (`border-white/[0.08]`).
- **Brand Accent**: **Neutral Platinum (`#E4E4E7` / `#71717A`)**.
- **Security Boundary**: The Console never stores raw API secrets after initial generation. Secret exposure occurs exactly once via an ultra-glass reveal modal.

---

## 2. Mandatory Remediation Checklist for Product Team

### Phase 1: API Key Provisioning & Granular Permission Scopes
- [ ] **One-Time Secret Generation Flow**:
  - Issue cryptographically secure API keys prefixed with `kt_live_` and `kt_test_`.
  - Display the full secret **only once** in an ultra-glass modal (`rgba(14, 14, 19, 0.55)` + `backdrop-blur-2xl`).
  - Store only the SHA-256 hash and the key prefix (`kt_live_xxxx...`) in Cloud Firestore.
- [ ] **Granular Permission Scopes**:
  Enforce explicit scope binding on all issued keys:
  - `devos:deploy` — Trigger code execution and build deployments.
  - `kora:infer` — Invoke internal neural model endpoints.
  - `auth:users:read` — Read organization-scoped identity claims.
  - `vux:tickets:verify` — Verify conference and meetup tickets via door scanner APIs.
  - `vynta:escrow:admin` — Access contract escrow telemetry and audit states.

### Phase 2: Multi-Tenant Organizations & RBAC Enforcement
- [ ] **Role Hierarchy**:
  Implement strictly partitioned organization roles:
  - `Owner`: Organization management, billing ownership, deletion rights, key provisioning.
  - `Admin`: Member invitations, permission scope assignment, team management.
  - `Developer`: Resource deployment, API key usage, log viewing.
  - `Billing Manager`: Invoice access, payment method management, subscription tiers.
  - `Viewer`: Read-only access to usage dashboards and public metrics.
- [ ] **Domain Invitation Links**:
  Support workspace invitations restricted to corporate email domains (e.g. `@company.com`), requiring verification through `Kontyra Accounts` (`auth.kontyra.name.ng`).

### Phase 3: Usage, Telemetry & Quota Enforcement
- [ ] **Interactive Consumption Charts**:
  - Display monthly API request volume, token burn rates across Kora AI, DevOS container execution minutes, and active subdomains.
  - Render quota thresholds with visual alerts when usage reaches 80% and 95% of plan capacity.
- [ ] **Soft & Hard Limit Enforcement**:
  - When quotas are exceeded, return standardized RFC 7807 error responses (`429 Too Many Requests`) with clear upgrade paths to higher Kontyra enterprise tiers.

### Phase 4: Immutable Audit Trail
- [ ] **Tamper-Evident Activity Logging**:
  - Record all administrative events: member invitations, role modifications, API key generation/revocation, security policy updates, and payment changes.
  - Structure every audit entry with `actorId`, `actorEmail`, `action`, `resourceId`, `ipAddress`, `userAgent`, and `timestamp`.
  - Audit collections must be strictly append-only with Firestore security rules preventing modification or deletion.

### Phase 5: Testing, Security & Brand Alignment
- [ ] Run full type validation: `npx tsc --noEmit`.
- [ ] Verify that Kontyra Standard 08 MobileNavbar (`56px h-14` + 9-Dot Bento Launcher) is mounted for mobile viewports.
- [ ] Confirm zero raw credentials or service account private keys are bundled into client assets.
