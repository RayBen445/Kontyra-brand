# Kontyra Cybersecurity Doctrine & Security Doctrine
## Multi-Tier Defense, Cryptographic Controls, and Access Governance

> **Authoritative Security Doctrine — Kontyra Security Operations & Architecture**  
> Baseline Standards: **OWASP ASVS Level 2 • NIST CSF v2.0 • ISO/IEC 27001 Principles**  
> Status: **Mandatory & Binding Across All Products**

---

## 1. Fundamental Security Invariants

```
                ┌────────────────────────────────────────┐
                │          UNTRUSTED CLIENT              │
                │ (Browsers, Mobile Apps, CLI Utilities) │
                └───────────────────┬────────────────────┘
                                    │ HTTPS (TLS 1.3)
                                    ▼
                ┌────────────────────────────────────────┐
                │        EDGE / INGRESS GATEWAY          │
                │ • Cloudflare WAF & DDoS Mitigation     │
                │ • Rate Limiting & Bot Filtering        │
                └───────────────────┬────────────────────┘
                                    │ Authenticated JWT Bearer
                                    ▼
                ┌────────────────────────────────────────┐
                │      SERVER-SIDE TRUST BOUNDARY        │
                │ • JWT Signature & Claims Verification  │
                │ • Cryptographic RBAC / ABAC            │
                │ • Input Sanitization & Parameter Validation
                └───────────────────┬────────────────────┘
                                    │ Service Account / VPC
                                    ▼
                ┌────────────────────────────────────────┐
                │   DATA STORAGE & THIRD-PARTY ENGINES   │
                │ • Cloud Firestore (Security Rules enforced)
                │ • Cloudflare R2 (Signed URLs only)     │
                │ • Resend API (Strict domain partition) │
                └────────────────────────────────────────┘
```

1. **Client-Side Decisions Are Not Security Controls**:
   - Disabling buttons, context menus, or devtools are UX cues, NOT protection.
   - All authorization checks, rate limits, and business logic validation must happen **server-side** inside Next.js route handlers, Express middlewares, or Firestore Security Rules.
2. **Zero Trust & Minimum Privilege**:
   - No internal service or microservice is assumed safe simply because it runs on an internal network or cloud project.
   - Every service identity must hold the least privileges necessary for its designated task.
3. **Zero Secret Leakage in Source**:
   - No private keys, database passwords, or operational secrets may ever be committed to git repositories or exposed in client bundles (`NEXT_PUBLIC_` or `VITE_` prefixes).
   - Public brand and documentation repos (`Kontyra-brand`) must NEVER contain real production API keys or tokens.

---

## 2. Authentication & Session Standards

1. **Protocol**: RFC 7636 OAuth 2.0 PKCE / OpenID Connect.
2. **Token Lifecycle**:
   - Access tokens (JWT): Maximum Time-To-Live (TTL) of **15 minutes**.
   - Refresh tokens: Stored exclusively in `HttpOnly`, `Secure`, `SameSite=Strict` cookies.
   - Password reset tokens: Single-use, invalidated on consumption, maximum lifetime **15 minutes**.
   - OTP codes: 6-digit numeric, cryptographically pseudo-random, maximum validity **10 minutes**.
3. **Session Revocation**:
   - Logging out must invalidate the refresh session in the central `Sessions` collection in `Kontyra Accounts`.
   - Critical account actions (password change, 2FA modification) must revoke all active child sessions across all products.

---

## 3. Storage & Binary Protection (Cloudflare R2)

1. **Zero Public Write Permissions**:
   - Cloudflare R2 buckets (`kontyra-media`, `reastudia`) must never permit anonymous or public PUT/POST operations.
2. **Presigned Upload Flow**:
   - Clients must request a short-lived presigned URL from an authenticated server route (`/api/upload/presign`).
   - Server must validate file MIME type, file size bounds, and user ownership before issuing the presigned URL.
3. **Public Read Caching**:
   - Binaries served through public custom domains must enforce cache headers and strip executable execution headers (`Content-Disposition: inline`, `X-Content-Type-Options: nosniff`).

---

## 4. Incident Response & Vulnerability Management

1. **Responsible Disclosure**: Security vulnerabilities must be reported directly to `security@kontyra.name.ng`.
2. **Response SLAs**:
   - **Critical (CVSS 9.0–10.0)**: Initial triage within 2 hours; containment within 12 hours; fix within 24 hours.
   - **High (CVSS 7.0–8.9)**: Initial triage within 6 hours; remediation within 72 hours.
   - **Medium (CVSS 4.0–6.9)**: Resolution within next sprint cycle (14 days).
3. **Post-Mortem Requirement**: Any incident involving data exposure, privilege escalation, or service outage exceeding 15 minutes requires a formal blameless post-mortem filed in `Kontyra-brand/security/incidents/`.
