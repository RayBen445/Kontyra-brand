# Product Implementation Instruction: Kontyra Identity (Accounts)
## Central SSO Enforcement, Session Security, and Domain Verification

> **Originating Authority**: Kontyra Engineering Governance Board  
> **Target Product**: **Kontyra Identity** (`c:\Users\DELL\Documents\GitHub\Kontyra Accounts`)  
> **Target Priority**: **P1 (Core Enterprise Infrastructure)**  
> **Instruction Status**: `Approved for Execution by Accounts Team`

---

## 1. Executive Summary & Required State

Kontyra Accounts (`accounts.kontyra.name.ng`) is the central authentication authority for all Kontyra services. It manages SSO token issuance, OAuth 2.0 PKCE conformance, passkeys (WebAuthn/FIDO2), enterprise SAML metadata, and the dual-key Resend email dispatcher.

---

## 2. Mandatory Remediation Checklist for Product Team

### Phase 1: Authentication & Token Security
- [ ] **Dual-Key Resend Invariant**: Maintain strict isolation in `src/lib/mail.ts`. Universal Auth/OTP emails must only dispatch via Account 1 (`auth.kontyra.name.ng`), while billing and announcements dispatch via Account 2 (`kontyra.name.ng`).
- [ ] **Token Expiration**: Enforce max 15-minute validity on issued JWT access tokens and custom Firebase tokens.
- [ ] **Passkeys & WebAuthn**: Ensure credential registration and authentication endpoints (`/api/auth/passkeys/*`) validate challenge freshness server-side with replay protection.

### Phase 2: Client Application Governance
- [ ] **App Registration & Secret Rotation**: Verify that client applications (`client_devos`, `client_vyntajobs`, `client_novelora`, etc.) have registered callback URLs with wildcard subdomains disallowed on non-development origins.
- [ ] **Session Invalidation**: When a user revokes an active session in `/account`, propagate invalidation to associated refresh tokens and kill child sessions.

### Phase 3: Testing & Verification
- [ ] Run full typecheck: `npx tsc --noEmit`.
- [ ] Verify CORS headers on `/api/v1/auth/*` and `/api/oauth/*`.
- [ ] Keep `KONTYRA_KEYS_REGISTRY.md` synchronized across all repositories.
