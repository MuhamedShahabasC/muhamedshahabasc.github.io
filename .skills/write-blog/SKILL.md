---
name: write-blog
description: Builds and updates this portfolio's static blog landing page and standalone articles while preserving the shared header, light visual system, responsive layout, and deployment output. Use when adding, importing, styling, or validating anything under `/blogs/`.
---

# Write Blog

## Architecture

- Static source: `site/`; blog source: `site/blogs/`.
- Generated Netlify output: `dist/`.
- Edit source only, then run `scripts/verify.sh`.
- Pages use semantic HTML, local Poppins and SVG assets, Alpine.js for shared state, and the vendored Konva version when needed.
- Shared visual primitives live in `site/assets/css/site-tokens.css`, `blog-header.css`, and `blog-footer.css`; articles add `blog-article.css` and the listing adds `blog-index.css`.

## Required patterns

- Copy the header and footer markup from an existing blog page.
- Load relative shared assets from `../assets/`; never use root-absolute internal URLs.
- Load shared CSS in this order: `site-tokens.css`, `static.css`, `blog-header.css`, then `blog-article.css` for articles or `blog-index.css` for the listing, followed by `blog-footer.css`.
- Use the shared color, type, spacing, border, focus, button, workbench, and footer primitives. Keep inline or page-specific CSS limited to article content and diagram geometry; do not redefine the site palette or shell.
- Desktop header stays fixed at the top; mobile header stays fixed at the bottom with a two-column menu and an explicit Home link.
- The site is light-only. Do not add a theme toggle, dark-mode styles, theme persistence, or `themechange` behavior.
- Konva experiences use the shared workbench markup and classes: `.bench`, `.bench-stage` or `.stage-wrap`, `.step-readout` or `.readout`, and `.bench-bar` or `.controls`. Use `.primary`, `.danger`, and shared mode-button states instead of inventing button styles.
- Canvas colors must be read from shared CSS custom properties on every render. Do not hard-code light-only backgrounds, text, borders, or status colors.
- Keep navigation links unadorned: `.header a { text-decoration: none; }`.
- Preserve supplied article prose and interactive behavior unless the user explicitly asks to edit it.

## Add a post

1. Create `site/blogs/<slug>.html` from the existing article shell.
2. Use a valid document with `doctype`, `lang`, UTF-8 meta, and viewport meta.
3. Add unique description, canonical, Open Graph, Twitter, and `BlogPosting` JSON-LD metadata.
4. Add the shared header, article footer, and CSS stack; keep page-specific styles scoped to content or diagram geometry.
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
- Light theme only; no theme toggle or dark-mode state is present.
- Header, toggle, and mobile menu remain visible and do not overlap.
- `scrollWidth === clientWidth`.
- Header links have `text-decoration-line: none`.
- No mojibake matching `â|Ã|Â|�`.
- Konva canvas exists and fits its container.
- Workbench buttons, mode selectors, narration, and canvas surface match the shared article treatment.
- The blog footer is present and links back to all field notes, work, about, and Medium.

## Git safety

- Verify `git var GIT_AUTHOR_IDENT` uses the repository-local identity.
- Never print or commit `.env` values, PATs, or credentials.
- Report pre-existing lint failures without fixing unrelated code.
