# 05 - Product Integration Guide & Checklist

A step-by-step manual for future engineers and autonomous coding agents to integrate a new application into the Kontyra product ecosystem.

---

## Pre-Integration Checklist

Before writing product code, collect the following resources:
- [ ] Unique `client_id` registered in Kontyra Accounts (e.g. `client_myproduct`).
- [ ] Child app Firebase project or API credentials.
- [ ] Domain assignment (e.g. `myproduct.kontyra.name.ng`).
- [ ] Authorized callback URI (e.g. `https://myproduct.kontyra.name.ng/auth/callback`).

---

## Integration Steps

### Step 1: Install Unified Design Tokens

Copy or reference the token stylesheets from `kontyra-brand`:
```bash
# In your project's globals.css / index.css
@import url('https://brand.kontyra.name.ng/tokens/design-tokens.css');
```
Or import `design-tokens.json` directly into your Tailwind configuration:
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kontyra: {
          base: '#000000',
          surface0: '#0A0A0A',
          surface1: '#111111',
          surface2: '#1A1A1A',
        }
      }
    }
  }
}
```

---

### Step 2: Implement the 56px Navigation Header

Include the standard 56px navbar with product branding and user profile popover:

```tsx
// src/components/KontyraHeader.tsx
import React from 'react';

interface KontyraHeaderProps {
  productName: string;
  user?: {
    username?: string;
    fullName?: string;
    photoUrl?: string;
  };
  onSignOut?: () => void;
}

export const KontyraHeader: React.FC<KontyraHeaderProps> = ({ productName, user, onSignOut }) => {
  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b border-white/[0.08] bg-black/80 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between">
      {/* Brand & Product Identity */}
      <div className="flex items-center gap-3">
        <a href="https://kontyra.name.ng" className="flex items-center gap-2 group">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 2 22 22 22" />
          </svg>
          <span className="font-bold text-sm tracking-wider text-white">KONTYRA</span>
        </a>
        <span className="text-white/20 select-none">/</span>
        <span className="text-sm font-medium text-white/90">{productName}</span>
      </div>

      {/* User Session Area */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60 hidden sm:inline-block">@{user.username || 'user'}</span>
            <img 
              src={user.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName || 'User')}&background=1A1A1A&color=FFF`} 
              alt={user.fullName || 'User'} 
              className="w-8 h-8 rounded-full ring-1 ring-white/10 object-cover"
            />
            {onSignOut && (
              <button 
                onClick={onSignOut}
                className="text-xs text-neutral-400 hover:text-white transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>
        ) : (
          <a
            href={`https://accounts.kontyra.name.ng/auth?client_id=${process.env.NEXT_PUBLIC_KONTYRA_CLIENT_ID}&return_url=${encodeURIComponent(window.location.origin + '/auth/callback')}`}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-white text-black hover:bg-neutral-200 transition-colors"
          >
            Sign In
          </a>
        )}
      </div>
    </header>
  );
};
```

---

### Step 3: Implement SSO Callback Route

Create `/auth/callback` in your router:

```tsx
// src/pages/SSOCallback.tsx
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAuth, signInWithCustomToken } from 'firebase/auth';

export default function SSOCallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    if (!token) {
      navigate('/login?error=missing_token');
      return;
    }

    const auth = getAuth();
    signInWithCustomToken(auth, token)
      .then(() => navigate('/dashboard'))
      .catch((err) => {
        console.error('SSO sign in failed:', err);
        navigate('/login?error=auth_failed');
      });
  }, [params, navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <p className="text-sm text-neutral-400 animate-pulse">Completing Kontyra SSO...</p>
    </div>
  );
}
```

---

### Step 4: Hydrate Profile from Central Accounts

In your application's `AuthContext` or state manager:

```typescript
export async function enrichProfileWithKontyra(idToken: string) {
  try {
    const res = await fetch('https://accounts.kontyra.name.ng/api/user/profile', {
      headers: {
        Authorization: `Bearer ${idToken}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      return data.user; // contains username, fullName, photoUrl, email, etc.
    }
  } catch (err) {
    console.warn('Central profile hydration skipped:', err);
  }
  return null;
}
```

---

## Verification & Launch Checklist

- [ ] All pages enforce the **56px** top bar.
- [ ] No local password inputs exist in the codebase.
- [ ] User profile loads dynamic display names and `@username` without throwing `404` or unhandled routes.
- [ ] Sign-out clears local tokens and terminates cleanly.
- [ ] Responsive layouts verified on mobile (`375px`), tablet (`768px`), and desktop (`1440px`).
- [ ] All environment secrets are referenced strictly via environment variables (never committed to git).
