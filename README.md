# United for Northfield — 2026 site (Miller & Melby)

React + Vite rebuild of the 2026 campaign design, structured to drop into
`Angela-Mari/nfldschoolboard`.

## How to use (for Angela)

1. Create a branch (or fork): `git checkout -b campaign-2026`
2. Replace `index.html`, `vite.config.js`, `package.json`, `src/`, and
   `public/assets/` with the files in this folder. Bootstrap is no longer
   needed — dependencies are just `react` and `react-dom`.
3. `npm install && npm run dev` to preview locally.
4. `npm run build` produces `dist/` for deployment; point
   www.unitedfornorthfield.com at the deployed build as before.

## To finish before launch

- Endorsement banner: replace the placeholder once 2026 endorsements land.
- "How write-in votes are counted" resource link (currently `#`).
- League of Women Voters forum date, time, and location.
- Photos live in `public/assets/` (`ben.jpg`, `alyssa.jpg`) — swap freely.

All copy is in plain data objects at the top of `src/App.jsx`.
