# Repository Guide

## Project

- Static personal portfolio deployed to Netlify.
- Editable site source lives in `site/`.
- `dist/` is generated deployment output and is not committed.
- The site uses semantic HTML, Alpine.js for page state, Lit for isolated web components, and Konva only for article canvases.
- Browser dependencies, fonts, and assets are vendored under `site/assets/`; the site has no npm or runtime CDN dependency.

## Structure

- Home page: `site/index.html`
- Blog index: `site/blogs/index.html`
- Blog articles: `site/blogs/*.html`
- Shared styles and scripts: `site/assets/css/` and `site/assets/js/`
- Build and verification: `scripts/build.sh` and `scripts/verify.sh`

## Commands

Run commands from the repository root:

- Build: `scripts/build.sh`
- Verify: `scripts/verify.sh`
- Preview: `python3 -m http.server 4174 --directory dist`

## Working Rules

- Edit source only under `site/`; never hand-edit `dist/`.
- Do not add React, Vite, npm, a package manager, or another build framework.
- Use relative internal URLs so the site remains path-prefix-safe.
- Keep primary content in HTML. Use Alpine for page state and Lit only for isolated enhancements.
- The public site is light-only. Do not add a theme toggle, persist a theme preference, or introduce dark-theme branches.
- Keep the home, blog index, and article header, color tokens, and responsive behavior consistent.
- Public pages require a unique title and description, canonical URL, Open Graph and Twitter metadata, and appropriate JSON-LD.
- Update `site/sitemap.xml` and `site/robots.txt` when public routes or the canonical domain change.
- Run `scripts/verify.sh`, then browser-check affected pages at desktop and mobile sizes in the light theme.
- Confirm there are no console errors, horizontal overflow, broken interactions, or mojibake.
- Never commit `.env` or expose credentials in code, logs, documentation, or responses.
- Do not push, deploy, or publish unless the user explicitly requests it.

## Repository Skills

- Before adding or changing blog pages, read and follow `.skills/write-blog/SKILL.md`.
