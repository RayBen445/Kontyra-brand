# Product Implementation Instruction: VUX Events
## Cryptographic QR Ticketing, Real-Time Door Scanner PWA, and Kontyra Ecosystem Sync

> **Originating Authority**: Kontyra Engineering Governance Board  
> **Target Product**: **VUX Events** (`c:\Users\DELL\Documents\GitHub\VUX-Events`)  
> **Target Priority**: **P1 (Live Event Ticketing & Access Control)**  
> **Instruction Status**: `Approved for Execution by VUX Product Team`

---

## 1. Executive Summary & Required State

VUX Events (`vux.kontyra.name.ng` / `events.kontyra.name.ng`) is the unified ticketing and attendance verification engine for developer summits, community hackathons, and literary salons across the Kontyra ecosystem.

**Governing Brand Law**:
- **Canvas Aesthetic**: Pure OLED Black (`#000000`) with recessed well surfaces (`#050508`).
- **Brand Accent**: **Neon Pink & Magenta (`#E60082`)** / **Ticket Coral (`#F43F5E`)**.
- **Universal Navigation**: Exactly `56px` (`h-14`) mobile bar with the 9-Dot Bento App Switcher (`LayoutGrid`).
- **Official Sender**: `VUX Events <notifications@kontyra.name.ng>` via Resend; unbranded Gmail fallbacks are strictly prohibited.

---

## 2. Mandatory Remediation Checklist for Product Team

### Phase 1: Cryptographic Ticketing & Gate Scanner Verification
- [ ] **Unique Digital Ticket Generation**:
  - Automatically mint unique ticket IDs (e.g. `TKT-XXXXXX`) and time-encoded QR payloads upon RSVP or purchase.
- [ ] **Server-Side Gate Validation**:
  - The live door scanner PWA (`html5-qrcode`) must validate tickets through the server endpoint (`/api/events/:id/checkin`), preventing screenshot duplicate check-ins and recording timestamp and organizer ID.
- [ ] **PDF & Wallet Ticket Passes**:
  - Deliver high-resolution downloadable PDF tickets (`jspdf` + `html2canvas`) and digital ticket wallet passes accessible at `/tickets`.

### Phase 2: Email Deliverability & Official Branding
- [ ] **Resend Transactional Ticket Dispatch**:
  - Automatically dispatch branded confirmation emails with digital QR passes from `notifications@kontyra.name.ng`.
  - Enforce `replyTo: 'events@kontyra.name.ng'` across all notification endpoints.
- [ ] **Eliminate Legacy Gmail Placeholders**:
  - Completely replace `vuxevents@gmail.com` across all codebases with official `@kontyra.name.ng` routing.

### Phase 3: Mobile Navigation & Ecosystem Launcher (Standard 08)
- [ ] **Mount Kontyra Mobile Navbar**:
  - Ensure the standard `56px` header with the 9-dot Bento app launcher (`LayoutGrid`) and slide-over navigation drawer is active on mobile screens (`< 768px`).
- [ ] **Ecosystem Switcher Alignment**:
  - Connect all 9 Kontyra applications (Accounts, DevOS, REASTUDIA, Novelora, Kora AI, VUX Events, Platform Gateway, Docs, Blog).

### Phase 4: Testing & Verification Gate
- [ ] Run typecheck: `npx tsc --noEmit` with 0 errors.
- [ ] Run production build: `npm run build` and ensure clean bundle generation.
- [ ] Verify that public event links (`/e/:id`, `/w/:slug`) load reliably across all devices.
