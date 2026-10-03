# Kontyra Design Tokens & Implementation Guide

This document provides instructions on how to integrate official Kontyra design tokens into Next.js, React, and Tailwind CSS codebases.

---

## 1. Tailwind CSS Configuration

Map Kontyra tokens directly in your `tailwind.config.ts` or Tailwind v4 `@theme` block:

```css
@theme {
  --color-kontyra-bg: #000000;
  --color-kontyra-surface: #09090b;
  --color-kontyra-overlay: #18181b;

  --color-kontyra-text-primary: #ffffff;
  --color-kontyra-text-secondary: rgba(255, 255, 255, 0.65);
  --color-kontyra-text-muted: rgba(255, 255, 255, 0.40);

  --color-kontyra-border-subtle: rgba(255, 255, 255, 0.08);
  --color-kontyra-border-medium: rgba(255, 255, 255, 0.14);
  --color-kontyra-border-hover: rgba(255, 255, 255, 0.25);

  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace;
}
```

---

## 2. Global Baseline Rules

Every Kontyra application must enforce the following root rules in its `globals.css`:

```css
html {
  overflow-x: hidden;
  max-width: 100vw;
  background-color: #000000;
}

body {
  background-color: #000000;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  letter-spacing: -0.011em;
}

::selection {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
```

---

## 3. Brand Assets Delivery

Always serve logos and brand vector assets directly from the `/public` root:
- `/public/kontyra-icon.svg` (Official monochrome vector mark)
- `/public/favicon.svg` (Official vector favicon)
- `/public/kontyra-gradient.svg` (Official keynote gradient mark)
