# Feedback Landing — Static Vite + React SPA

A single-page static site. No TanStack, no router, no backend.

## Use

```bash
npm install
npm run dev      # local dev
npm run build    # outputs to dist/
npm run preview  # preview the built dist/
```

## Deploy on Vercel

Vercel auto-detects Vite. Defaults:

- Build command: `npm run build`
- Output directory: `dist`

The build produces `dist/index.html` plus hashed JS/CSS assets — deployable as
a static site anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3).

## Structure

```
index.html
package.json
vite.config.js
src/
  main.jsx
  App.jsx
  styles.css
```
