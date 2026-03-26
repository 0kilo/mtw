# Repository Guidelines

## Project Structure & Module Organization
This is a Vite + React project for MTW problem solutions and visualizations. Application code lives in `src/`, with entry points in `src/main.jsx` and `src/App.jsx`. UI components are grouped by feature under `src/components/`, for example `src/components/graph/`, `src/components/chapters/`, and `src/components/visualizations/`. Chapter content and reference material live in `src/chapters/`. Static images and icons are stored in `src/assets/`.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the local Vite dev server.
- `npm run build`: create the production bundle in `dist/`.
- `npm run preview`: serve the built app locally.
- `npm run lint`: run ESLint across the repository.
- `npm run deploy`: publish `dist/` to GitHub Pages via `gh-pages`.

## Coding Style & Naming Conventions
Use modern JavaScript modules and React function components. Follow the existing style: 2-space indentation, single quotes in JS, and semicolons omitted. Component and file names use `PascalCase` for React components (`Chapter1Summary.jsx`) and `camelCase` for helpers (`useMeshGenerator.js`, `distance.js`). Keep feature-specific styles next to the component in matching `.css` files. ESLint rules are defined in `eslint.config.js`; `dist/` is ignored.

## Testing Guidelines
There is no automated test runner configured in `package.json` yet. Before opening a PR, validate changes with `npm run lint` and `npm run build`. If you add tests, prefer colocated `*.test.js` or `*.test.jsx` files and keep names aligned with the module under test.

## Commit & Pull Request Guidelines
Recent commits use short, lowercase, imperative summaries such as `grid docs`, `cal-var`, and `chapter 5`. Keep commit messages similarly concise and scoped. Pull requests should describe the change, note any content or UI impact, and include screenshots for visual updates. Link related issues when applicable and mention any manual verification performed.

## Agent Notes
Do not overwrite user-authored content in `src/chapters/` or generated assets unless that is the explicit task. This repo already has uncommitted work in progress; inspect carefully before editing shared files.
