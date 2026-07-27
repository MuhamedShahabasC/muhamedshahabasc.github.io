# Repository Guide

## Project

- Static personal portfolio deployed to Netlify.
- Editable site source lives in `site/`.
- `dist/` is generated deployment output and is not committed.
- The site uses semantic HTML, Alpine.js for page state, and Lit for isolated web components.

## Commands

Run commands from the repository root:

- Build: `scripts/build.sh`
- Verify: `scripts/verify.sh`
- Preview: `python3 -m http.server 4174 --directory dist`

## Working Rules

- Edit source only under `site/`; never hand-edit `dist/`.
- Use relative internal URLs so the site remains path-prefix-safe.
- Keep primary content in HTML. Use Alpine for page state and Lit only for isolated enhancements.
- Preserve the shared theme contract: `localStorage["theme"]`, `light`/`dark`, `body.dark-theme`, and `themechange`.
- Run `scripts/verify.sh` and browser-check responsive light/dark behavior before declaring a change complete.
- Never commit `.env` or expose credentials in code, logs, documentation, or responses.
- Do not push, deploy, or publish unless the user explicitly requests it.

## Repository Skills

- Before adding or changing blog pages, read and follow `.skills/write-blog/SKILL.md`.
