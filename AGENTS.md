# Repository Guide

## Project

- Personal portfolio published through GitHub Pages.
- The editable React/Vite application lives in `src/`.
- The repository-root `index.html` and `assets/` are generated deployment output.

## Commands

Run commands from `src/`:

- Install dependencies: `npm ci`
- Start development: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Working Rules

- Edit application source under `src/src/` and blog source under `src/public/blogs/`; do not hand-edit generated root assets.
- Keep changes focused and follow the existing React and CSS style.
- Run `npm run lint` and `npm run build` before declaring a code change complete.
- Never commit `.env` or expose credentials in code, logs, documentation, or responses.
- Do not push, deploy, or publish unless the user explicitly requests it.

## Repository Skills

- Before adding or changing blog pages, read and follow `.skills/write-blog/SKILL.md`.
