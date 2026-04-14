# Boy Bob Pickles Landing Page

Previewable, deploy-ready React + Tailwind single-page waitlist site for **Boy Bob Pickles**.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The page component lives in `src/BoyBobPicklesLandingPage.jsx` and is wrapped by `src/App.jsx`.

## Deploy note

`vite.config.js` uses `base: "./"` so built asset paths stay relative. This prevents a blank white screen when the site is hosted from a subdirectory (for example GitHub Pages project sites).
