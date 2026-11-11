# Kontyra Identity & SSO Standard

> **Official Kontyra Brand Specification & Product Division Guidelines**  
> Division: **Central Security, Single Sign-On & Universal Accounts Hub**  
> Canonical URLs: `account.kontyra.name.ng` / `accounts.kontyra.name.ng`  
> Brand Accent: **Trust Emerald (`#10B981`)**

---

## 1. Product Mission & Vision

Kontyra Identity serves as the centralized authentication provider (IDP) and universal credential vault for all Kontyra digital products. It eliminates fragmented user accounts, guarantees cryptographic security, and powers seamless Single Sign-On (SSO) across all first-party and third-party partner applications.

---

## 2. Authentication Standards

1. **Zero Credential Duplication:**
   No child product (DevOS, Novelora, REASTUDIA, Console, VUX) is permitted to implement independent username/password storage tables. All credentials reside exclusively within Kontyra Accounts.
2. **WebAuthn & FIDO2 Passkeys:**
   Passwordless biometric login (Face ID, Touch ID, Windows Hello, YubiKey) is prioritized as the primary zero-friction sign-in vector.
3. **Passwordless Magic Links:**
   Cryptographically signed, short-lived magic links delivered via verified transactional mail (`noreply@auth.kontyra.name.ng`).
4. **Social & Developer OAuth Providers:**
   Google OAuth 2.0 and GitHub OAuth integration for rapid developer onboarding.

---

## 3. Profile Hydration & Universal Token Format

Upon successful authentication, Kontyra Accounts mints a unified JSON Web Token (JWT) and Firebase Custom Token containing universal profile claims:

```json
{
  "uid": "usr_7894210",
  "email": "developer@kontyra.name.ng",
  "email_verified": true,
  "username": "professor",
  "fullName": "Oladoye Heritage",
  "avatarUrl": "https://accounts.kontyra.name.ng/avatars/professor.png",
  "role": "developer",
  "tier": "growth",
  "officialStaff": true,
  "organizations": [
    { "orgId": "org_kontyra_core", "role": "owner" }
  ]
}
```

Child applications hydrate user state by calling the central profile endpoint:
```http
GET https://accounts.kontyra.name.ng/api/user/profile
Authorization: Bearer <ID_TOKEN>
```

---

## 4. Client SDK Integration (`<KontyraProvider>`)

Child React and Next.js applications wrap their root component in `<KontyraProvider>`:

```tsx
import { KontyraProvider } from "kontyra-auth/react";

export function AppRoot({ children }: { children: React.ReactNode }) {
  return (
    <KontyraProvider
      config={{
        domain: "https://accounts.kontyra.name.ng",
        appId: "devos", // or "novelora", "reastudia", "console"
        redirectUri: typeof window !== "undefined" ? window.location.origin : "",
      }}
    >
      {children}
    </KontyraProvider>
  );
}
```
