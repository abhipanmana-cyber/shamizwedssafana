# AGENTS.md – Wedding Invitation Site

## Project Architecture

Single-page TanStack Start (React + Vite) application deployed on Netlify. No database or server functions — entirely static/client-side.

## Key Directories

```
src/
  routes/
    __root.tsx      # HTML shell, font imports, global head meta
    index.tsx       # Entire wedding invitation (all 6 slides)
  styles.css        # All CSS: custom properties, slide layouts, animations, fonts
public/             # Static assets (favicon)
netlify.toml        # Netlify build config
```

## Coding Conventions

- **All styling in `styles.css`** using CSS custom properties (`--maroon`, `--gold`, etc.) — Tailwind used only for its reset/base layer via `@import "tailwindcss"`.
- **Inline `style` props** used extensively in JSX for per-element values (responsive `clamp()` sizing, positional values). This is intentional — the component is a single decorative page, not a reusable component library.
- **No external image assets** — all illustrations (floral corners, couple silhouette, petals) are inline SVG or CSS shapes.
- **Scroll-snap layout** — `.slide-container` uses `scroll-snap-type: y mandatory` with each `.slide` at `height: 100dvh`. Nav dots track active slide via scroll listener.

## Non-Obvious Decisions

- **`TARGET_MS` hardcoded** in `CountdownTimer` as a Unix timestamp (ms) to avoid `new Date()` timezone parsing issues across environments. The value `1753245600000` = 2026-07-23T06:30:00Z = 12:00 PM IST.
- **`slideRefs.current[i]` assignment pattern** uses callback refs (`ref={(el) => { slideRefs.current[i] = el }}`) — this is intentional to avoid stale closure issues with array refs in React 19.
- **Floral corners** are repeated via CSS transform (`scaleX(-1)`, `scaleY(-1)`, `scale(-1)`) from a single `FloralCorner` SVG component — no need for four separate paths.
- **Animation classes** (`anim-fadeInUp`, `delay-*`) are defined in CSS and applied via `className` — intentionally not using a motion library to keep bundle small.

## Adding/Editing Content

All wedding copy is in `src/routes/index.tsx`. Each slide is a clearly labelled section with a comment (`/* SLIDE N – NAME */`). To change dates, names, or venue, search for the visible text strings directly in that file.
