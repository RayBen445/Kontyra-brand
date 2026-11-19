# Cybersecurity Implementation Instruction: Enterprise Zero Trust & Threat Mitigation
## Operational Hardening Checklist, Cryptographic Access Controls, and Incident Response Playbook

> **Originating Authority**: Kontyra Security Operations & Architecture Board  
> **Target Scope**: **Enterprise-wide (All Products: Accounts, DevOS, VUX, VyntaJobs, Novelora, REASTUDIA, Console, Kora)**  
> **Standard Compliance**: **OWASP ASVS Level 2 • NIST CSF v2.0 • ISO/IEC 27001 Principles**  
> **Instruction Status**: `Mandatory & Binding Across All Engineering Repositories`

---

## 1. Executive Summary & Required State

Every product under the Kontyra banner operates within an untrusted client environment. Client-side state (browsers, mobile views, CLI tools) can be manipulated, inspected, and bypassed. Therefore:
1. **Client-side gates are cosmetic conveniences, NEVER security boundaries.**
2. **All authorization, token verification, and input sanitation must execute server-side.**
3. **No secret, service account key, or private credential may ever be bundled into client builds.**

---

## 2. Mandatory Product Hardening Checklist

### Phase 1: Authentication & Session Governance
- [ ] **Short-Lived Access Tokens**:
  - Enforce maximum Time-to-Live (TTL) of **15 minutes** for all issued JWT access tokens and custom tokens.
- [ ] **Secure Refresh Token Cookies**:
  - Refresh tokens must be transmitted and stored exclusively in `HttpOnly`, `Secure`, `SameSite=Strict` cookies. LocalStorage and SessionStorage storage of refresh tokens is strictly prohibited.
- [ ] **WebAuthn & Passkey Replay Protection**:
  - Challenge verification endpoints must enforce server-side nonce consumption to prevent replay attacks.
- [ ] **Cross-Product Session Invalidation**:
  - When an account changes password or disables/enables 2FA, the identity authority (`Kontyra Accounts`) must immediately revoke all child refresh tokens across all products.

### Phase 2: Server-Side Authorization & Input Sanitation
- [ ] **Zero-Trust Parameter Validation**:
  - Validate all route parameters, request bodies, and query strings with strict runtime schemas (Zod or type validators) before database queries.
- [ ] **Cryptographic RBAC & ABAC**:
  - Every API endpoint modifying sensitive resources must verify the caller's JWT claims, organization membership, and designated permissions independently.
- [ ] **No Client-Side Authorization Logic**:
  - Hiding or disabling buttons based on user role is a UX feature only. Backend route handlers must independently reject unauthorized requests with HTTP `403 Forbidden`.

### Phase 3: Cloudflare R2 & Media Storage Hardening
- [ ] **Zero Anonymous Bucket Write Permissions**:
  - Cloudflare R2 buckets (`kontyra-media`, `reastudia`) must never accept unauthenticated PUT or POST uploads.
- [ ] **Presigned Upload Pipeline**:
  - File uploads must flow through `/api/upload/presign`, where the server validates the user's session, MIME type, file extension, and maximum byte size.
- [ ] **Header Hardening**:
  - Enforce `X-Content-Type-Options: nosniff`, `Content-Disposition: inline`, and strict CSP headers on binary delivery custom domains.

### Phase 4: Email & Communication Security
- [ ] **Strict Resend Apex Domain Partitioning**:
  - All outgoing emails must originate from verified identities on `@kontyra.name.ng` (e.g., `notifications@kontyra.name.ng`, `auth@kontyra.name.ng`, `billing@kontyra.name.ng`).
  - Completely eliminate unbranded Gmail fallback addresses (`vuxevents@gmail.com`, etc.).
- [ ] **Dual-Key Resend Isolation**:
  - Universal Auth/OTP emails must use dedicated Account 1 (`auth.kontyra.name.ng`); transactional event/billing emails must use dedicated Account 2.

### Phase 5: Incident Response & Vulnerability Management
- [ ] **Vulnerability Channel**:
  - Direct all security inquiries and external disclosures to `security@kontyra.name.ng`.
- [ ] **Response SLA Matrix**:
  - **Critical (CVSS 9.0–10.0)**: Initial triage within 2 hours; containment within 12 hours; fix within 24 hours.
  - **High (CVSS 7.0–8.9)**: Triage within 6 hours; fix within 72 hours.
  - **Medium (CVSS 4.0–6.9)**: Remediation within 14 days (next sprint).
- [ ] **Blameless Post-Mortem Requirement**:
  - Any security incident resulting in data exposure or downtime exceeding 15 minutes requires a formal post-mortem filed in `Kontyra-brand/security/incidents/`.
