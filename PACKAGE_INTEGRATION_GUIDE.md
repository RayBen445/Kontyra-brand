# @rayben445/kontyra-ui: Global Private Design Package Guide

> **Official Private Design System & Component Library for the Kontyra Developer Ecosystem.**  
> Package Name: `@rayben445/kontyra-ui`  
> Registry: GitHub Packages (`https://npm.pkg.github.com`)

---

## 1. Quick Installation in Any Kontyra App

### Method A: Via GitHub Packages Registry (Recommended)

1. Create or update `.npmrc` in your app's root folder:
   ```ini
   @rayben445:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```
2. Install the package:
   ```bash
   npm install @rayben445/kontyra-ui
   ```

### Method B: Via Direct Git Dependency (Zero Token Configuration)

If you have git repository access, add this directly to your app's `package.json`:
```json
"dependencies": {
  "@rayben445/kontyra-ui": "git+https://github.com/RayBen445/Kontyra-brand.git"
}
```
Then run:
```bash
npm install
```

---

## 2. Usage Examples

### A. Universal Mobile Navbar (With Bottom Sheet & Asymmetric Pulse Dash)

```tsx
import React from 'react';
import { MobileNavbar, NavGroup } from '@rayben445/kontyra-ui';
import '@rayben445/kontyra-ui/tokens.css';

const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Platform Navigation',
    items: [
      { id: 'dashboard', label: 'Dashboard', href: '/dashboard', isActive: true },
      { id: 'workspaces', label: 'Workspaces', href: '/workspaces' },
      { id: 'settings', label: 'Security & Keys', href: '/settings' },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <MobileNavbar
        appName="DevOS"
        appBadge="Cloud IDE"
        accentColor="#13D9F2"
        navGroups={NAV_GROUPS}
      />
      <main>{children}</main>
    </div>
  );
}
```

### B. Logo Loading States (4 Kinetic Archetypes)

```tsx
import { KontyraLoader } from '@rayben445/kontyra-ui';

// 1. Neural Pulse (Core Boot / Splash Screen)
<KontyraLoader variant="neural-pulse" size="lg" label="Booting DevOS Workspace..." />

// 2. Laser Contour Trace (Execution & Terminal Compilation)
<KontyraLoader variant="laser-trace" size="lg" label="Compiling Sandbox Container..." />

// 3. Chromatic Aura Sweep (Passkey & Security Handshake)
<KontyraLoader variant="chromatic-sweep" size="md" label="Verifying FIDO2 Credentials..." />

// 4. Micro In-Button Loader
<button className="px-4 py-2 bg-white text-black font-bold rounded-xl flex items-center gap-2">
  <KontyraLoader variant="micro" label="Authenticating..." />
</button>
```

### C. Authentic Kontyra Vector Logo

```tsx
import { KontyraLogo } from '@rayben445/kontyra-ui';

// Renders genuine twin-loop infinity vector with cyan-to-magenta gradient stops
<KontyraLogo className="w-8 h-8" idPrefix="app-hdr" />
```

### D. Ecosystem Brand Apps & Color Constants

```tsx
import { KONTYRA_ECOSYSTEM_APPS } from '@rayben445/kontyra-ui';

console.log(KONTYRA_ECOSYSTEM_APPS);
// Returns standard records for DevOS, Accounts, REASTUDIA, Novelora, Kora AI, VUX Events, API, Docs, Blog
```

---

## 3. Automated Publishing Workflow

Every push to `main` touching `src/`, `package.json`, or tokens automatically runs `.github/workflows/publish.yml`, building and pushing the latest version to GitHub Packages.
