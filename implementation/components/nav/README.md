# MobileNavbar Component

A reusable, responsive navigation header for mobile viewports, designed to be used across all Kontyra-branded applications.

## Features
- **Responsive Layout**: Designed for mobile and tablet screens.
- **Ecosystem Integration**: Built-in 9-dot app switcher to navigate between Kontyra Apps.
- **Brand Consistency**: Uses standard Kontyra design tokens (bg-zinc-950/80, backdrop-blur-2xl).
- **Authentication Ready**: Accepts `onSignIn` callbacks for seamless auth flow integration.

## Usage

```tsx
import { MobileNavbar } from "@kontyra/ui/nav";
import { Terminal, Sparkles, Zap } from "lucide-react";

const apps = [
  { id: "devos", name: "DevOS", tagline: "Cloud IDE", url: "...", badge: "IDE", color: "from-blue-600 to-indigo-700", icon: Terminal },
  // ...
];

export default function Layout({ children }) {
  return (
    <>
      <MobileNavbar 
        appName="Kontyra" 
        ecosystemApps={apps} 
        isAuthenticated={false} 
        onSignIn={() => console.log("Sign in clicked")}
      />
      <main>{children}</main>
    </>
  );
}
```

## Props
| Prop | Type | Description |
| :--- | :--- | :--- |
| `appName` | `string` | Display name for the header. |
| `ecosystemApps` | `Array` | List of ecosystem app registry items. |
| `isAuthenticated`| `boolean` | Controls visibility of Sign In button. |
| `onSignIn` | `() => void` | Callback for authentication trigger. |
