---
name: write-blog
description: Builds and updates this portfolio's static blog landing page and standalone articles while preserving the shared header, theme behavior, responsive layout, and deployment output. Use when adding, importing, styling, or validating anything under `/blogs/`.
---

# Write Blog

## Architecture

- React/Vite portfolio source: `src/src/`.
- Static blog source: `src/public/blogs/`.
- Generated GitHub Pages output: repository-root `blogs/`.
- Edit source only. Run `npm run build` from `src/` to regenerate root output.
- Blog pages use static HTML/CSS/JS, Poppins, Unicons, shared `header.css`/`header.js`, and the existing pinned Konva version when needed.

## Required patterns

- Copy the header and theme-toggle markup from the existing blog pages.
- Load `/blogs/header.css` and `/blogs/header.js`.
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

1. Create `src/public/blogs/<slug>.html` from the existing article shell.
2. Use a valid document with `doctype`, `lang`, UTF-8 meta, and viewport meta.
3. Add the shared header and theme toggle; keep page-specific styles scoped.
4. Keep punctuation encoding-safe for charsetless static servers:
   - HTML text: numeric entities such as `&#8212;`
   - JavaScript strings: Unicode escapes such as `\u2014`
5. Add one card/link to `src/public/blogs/index.html`.
6. Run the build; never manually duplicate edits into root `blogs/`.

## Validation

From `src/`:

```sh
npm run build
npm run lint
```

From the repository root:

```sh
git diff --check
cmp src/public/blogs/index.html blogs/index.html
cmp src/public/blogs/header.css blogs/header.css
cmp src/public/blogs/header.js blogs/header.js
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
