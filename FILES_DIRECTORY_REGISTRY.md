# Kontyra Ecosystem: Master File & Asset Location Directory

> **Purpose:** Authoritative reference for all AI Coding Agents, Human Developers, and Pair Programmers.  
> **Source of Truth Repository:** `https://github.com/RayBen445/Kontyra-brand` (Local path: `C:\Users\DELL\Documents\GitHub\Kontyra-brand`)  
> **Updated:** November 2026

---

## 1. Quick File Map — Where to Find What

| What You Need | Exact File / Directory Path | Notes |
| :--- | :--- | :--- |
| **All Brand Logos & SVGs** | `brand/logos/` | Gradient, monochrome, white, black, wordmark, and favicons |
| **Primary Gradient Logo** | `brand/logos/primary/kontyra-gradient.svg` | Main apex brand mark (Cyan to Indigo gradient) |
| **Monochrome White Logo** | `brand/logos/monochrome/kontyra-white-icon.svg` | For dark/black navbar headers |
| **Full Wordmark SVG** | `brand/logos/primary/kontyra-wordmark.svg` | "KONTYRA" vector logotype |
| **Design Tokens (JSON)** | `design-system/tokens/design-tokens.json` | Colors, borders, shadows, spacing, typography |
| **Design Tokens (CSS)** | `design-system/tokens/design-tokens.css` | Import directly into your global CSS |
| **Universal Topbar (56px)** | `design-system/navigation/navbar.md` | Standard layout, mobile drawer, app switcher |
| **Universal Footer** | `design-system/navigation/footer-standard.md` | Ecosystem links, copyright, legal links |
| **Interactive UI Sandbox** | `preview/index.html` | Open in browser to see all buttons, cards, boxes |
| **Cloudflare R2 Media Guide**| `standards/07-cloudflare-r2-media-storage.md` | Direct upload, credentials, CDN URL, app folders |
| **SSO & Auth Integration** | `standards/01-identity-and-sso.md` | Kontyra SSO login, OAuth PKCE, token exchange |
| **Email & Resend Config** | `standards/03-email-and-notifications.md` | Resend API keys, sending domains, HTML template |
| **Agent Coding Directive** | `AGENT_INSTRUCTIONS.md` | Mandatory rules for all agents (pure black, accent colors) |

---

## 2. Cloudflare R2 Media Storage — Live Credentials & Folder Rules

All applications share a single central R2 bucket (`kontyra-media`) with global CDN distribution.

### Infrastructure Coordinates:
- **Cloudflare Account ID:** `84bfebd0dbc3becf3f631b4b1a6720ef`
- **Cloudflare API Token:** Configured via `process.env.R2_API_TOKEN` (see `.env` / secure internal keys registry)
- **Bucket Name:** `kontyra-media`
- **Public CDN Base URL:** `https://pub-ca36ec775bc2411db57b100352558ed3.r2.dev`
- **Direct REST Upload Endpoint:** `https://api.cloudflare.com/client/v4/accounts/84bfebd0dbc3becf3f631b4b1a6720ef/r2/buckets/kontyra-media/objects/{objectKey}`

### Mandatory Subfolder Setup for Your App:
> [!IMPORTANT]
> When building upload features in your app, **you must set up a dedicated subfolder** so your app's uploads do not collide with other Kontyra apps:
>
> | App Name | Your Dedicated S3/R2 Folder Key Prefix | Example File Upload Path |
> | :--- | :--- | :--- |
> | **Novelora** | `images/novelora/` | `images/novelora/covers/<authorId>/<uuid>.webp` |
> | **REASTUDIA** | `images/reastudia/` | `images/reastudia/covers/<novelId>/<uuid>.webp` |
> | **Kontyra Accounts** | `images/accounts/` | `images/accounts/avatars/<userId>/<uuid>.jpg` |
> | **DevOS** | `images/devos/` | `images/devos/screenshots/<workspaceId>/<uuid>.png` |
> | **VUX Events** | `images/vux/` | `images/vux/banners/<eventId>/<uuid>.png` |
> | **VyntaJobs** | `images/jobs/` | `images/jobs/resumes/<userId>/<uuid>.pdf` |

Full implementation code (Next.js route, Express, Vite, and React client) is available in:
[`standards/07-cloudflare-r2-media-storage.md`](./standards/07-cloudflare-r2-media-storage.md)

---

## 3. Product Guidelines & Standards Directory

Each Kontyra product has a dedicated guidelines file with typography, color tokens, and feature blueprints:

| Product | Local Guidelines Path | Dedicated Accent Color | Live Domain |
| :--- | :--- | :--- | :--- |
| **DevOS** | [`product-guidelines/devos.md`](./product-guidelines/devos.md) | Cyan (`#13D9F2`) | `devos.kontyra.name.ng` |
| **Accounts / SSO** | [`product-guidelines/identity.md`](./product-guidelines/identity.md) | Emerald (`#10B981`) | `accounts.kontyra.name.ng` |
| **KORA AI** | [`product-guidelines/kora-ai.md`](./product-guidelines/kora-ai.md) | Blue/Violet (`#079BFF` & `#4B00E8`) | `api.kontyra.name.ng` |
| **Console** | [`product-guidelines/console.md`](./product-guidelines/console.md) | Cyan & Indigo | `console.kontyra.name.ng` |
| **Novelora Studio** | [`product-guidelines/novelora.md`](./product-guidelines/novelora.md) | Sovereign Gold (`#D4AF37`) | `novelora.kontyra.name.ng` |
| **REASTUDIA** | [`product-guidelines/reastudia.md`](./product-guidelines/reastudia.md) | Warm Ivory (`#F5E8D0`) | `reastudia.kontyra.name.ng` |
| **VUX Events** | [`product-guidelines/vux.md`](./product-guidelines/vux.md) | Neon Magenta (`#E60082`) | `vux.kontyra.name.ng` |
| **VyntaJobs** | [`product-guidelines/vyntajobs.md`](./product-guidelines/vyntajobs.md) | Marketplace Indigo (`#1747F2`)| `jobs.kontyra.name.ng` |
| **Technical Docs** | [`product-guidelines/docs.md`](./product-guidelines/docs.md) | Silver Grey (`#A1A1AA`) | `docs.kontyra.name.ng` |
| **Editorial & Blog**| [`product-guidelines/blog.md`](./product-guidelines/blog.md) | Amber (`#F59E0B`) | `blog.kontyra.name.ng` |
| **Legal & Privacy** | [`product-guidelines/legal.md`](./product-guidelines/legal.md) | Slate (`#64748B`) | `legal.kontyra.name.ng` |

---

## 4. Local Workspace Repositories Map

All active development repositories on the host machine (`C:\Users\DELL\Documents\GitHub\`):

- **Kontyra Brand System:** `C:\Users\DELL\Documents\GitHub\Kontyra-brand`
- **REASTUDIA (Reader App):** `C:\Users\DELL\Documents\GitHub\Web-Novel-`
- **Novelora (Studio & Showcase):** `C:\Users\DELL\Documents\GitHub\Novel-Weaver-`
- **Kontyra Accounts (SSO Provider):** `C:\Users\DELL\Documents\GitHub\Kontyra Accounts`
- **DevOS (Cloud IDE Platform):** `C:\Users\DELL\Documents\GitHub\DevOS-Code-Execution-Platform`
- **Kora AI Systems:** `C:\Users\DELL\Documents\GitHub\Kora-by-Kontyra`
- **VUX Events:** `C:\Users\DELL\Documents\GitHub\VUX-Events`
- **Ray Bén Portfolio:** `C:\Users\DELL\Documents\GitHub\Ray-B-n-Portfolio`

---

## 5. Standard Environment Variables for All Apps

When building any app in the ecosystem, configure `.env` with these verified defaults:

```bash
# ─── Kontyra Single Sign-On (SSO) ──────────────────────────────
VITE_KONTYRA_SSO_URL="https://accounts.kontyra.name.ng/auth"
VITE_KONTYRA_CLIENT_ID="client_ue3zxmwa9uw2"

# ─── Cloudflare R2 Media Storage ──────────────────────────────
R2_ACCOUNT_ID="84bfebd0dbc3becf3f631b4b1a6720ef"
R2_API_TOKEN="your-cloudflare-api-token"
R2_BUCKET_NAME="kontyra-media"
R2_PUBLIC_BASE_URL="https://pub-ca36ec775bc2411db57b100352558ed3.r2.dev"

# ─── Firebase Infrastructure ──────────────────────────────────
VITE_FIREBASE_PROJECT_ID="caramel-vim-470321-v6"
VITE_FIREBASE_AUTH_DOMAIN="caramel-vim-470321-v6.firebaseapp.com"
```

---

## 6. Shared Navigation Components & Standards

- **Standard Document:** [`standards/08-mobile-navbar-standard.md`](./standards/08-mobile-navbar-standard.md)
- **Reusable React Component:** [`design-system/navigation/MobileNavbar.tsx`](./design-system/navigation/MobileNavbar.tsx)
- **Ecosystem App Switcher:** 9-Dot Bento (`LayoutGrid`) linking across all 8 Kontyra web products.
- **Heights:** 56px (`h-14`) on mobile, 64px (`h-16`) on desktop.

