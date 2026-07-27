---
name: write-blog
description: Builds and updates this portfolio's static blog landing page and standalone articles while preserving the shared header, theme behavior, responsive layout, and deployment output. Use when adding, importing, styling, or validating anything under `/blogs/`.
---

# Write Blog

## Architecture

- Static source: `site/`; blog source: `site/blogs/`.
- Generated Netlify output: `dist/`.
- Edit source only, then run `scripts/verify.sh`.
- Pages use semantic HTML, local Poppins and SVG assets, Alpine.js for shared state, and the vendored Konva version when needed.

## Required patterns

- Copy the header and theme-toggle markup from an existing blog page.
- Load relative shared assets from `../assets/`; never use root-absolute internal URLs.
- Desktop header stays fixed at the top; mobile header stays fixed at the bottom with the 3x2 menu.
- Match the home theme contract exactly:
  - preference key: `localStorage["theme"]`
  - values: `light` or `dark`
  - dark class: `body.dark-theme`
  - theme event: `themechange`
- Article-specific canvases must rerender on `themechange`.
- Keep navigation links unadorned: `.header a { text-decoration: none; }`.
- Preserve supplied article prose and interactive behavior unless the user explicitly asks to edit it.

## Add a post

1. Create `site/blogs/<slug>.html` from the existing article shell.
2. Use a valid document with `doctype`, `lang`, UTF-8 meta, and viewport meta.
3. Add unique description, canonical, Open Graph, Twitter, and `BlogPosting` JSON-LD metadata.
4. Add the shared header and theme toggle; keep page-specific styles scoped.
5. Keep punctuation encoding-safe for charsetless static servers:
   - HTML text: numeric entities such as `&#8212;`
   - JavaScript strings: Unicode escapes such as `\u2014`
6. Add one card/link and matching JSON-LD entry to `site/blogs/index.html`.
7. Add the canonical route to `site/sitemap.xml`.

## Validation

From the repository root:

```sh
scripts/verify.sh
```

Browser-check `/blogs/` and every new article with a cache-busting query:

- Desktop `1440x900` and mobile `390x844`.
- Light and dark modes; preference persists between home, list, and article.
- Header, toggle, and mobile menu remain visible and do not overlap.
- `scrollWidth === clientWidth`.
- Header links have `text-decoration-line: none`.
- No mojibake matching `â|Ã|Â|�`.
- Konva canvas exists, fits its container, and updates after a theme change.

## Git safety

- Verify `git var GIT_AUTHOR_IDENT` uses the repository-local identity.
- Never print or commit `.env` values, PATs, or credentials.
- Report pre-existing lint failures without fixing unrelated code.
