# Solo Leveling: IRL Stats (Frontend)

This is a Next.js (App Router) + TypeScript + Tailwind frontend for logging daily activities and calculating "IRL" stats.

## Local development

- Install: `npm ci`
- Dev server: `npm run dev` (Turbopack)
- Build: `npm run build`
- Static export output: `out/`

## Deploying to GitHub Pages (free)

This repo includes a GitHub Actions workflow to build and deploy the site to GitHub Pages as a static export.

- Config: `.github/workflows/deploy-pages.yml`
- next.config.ts is set to `output: "export"` and `images.unoptimized`. When the workflow runs with `GITHUB_PAGES=true`, it also sets `basePath` to `/solo-leveling-game` so routes work under Pages.

### First-time setup in GitHub

In your GitHub repo settings:
- Go to Settings → Pages
- Set Source to "GitHub Actions"
- Save

After you push to master, the action will:
- Build the static site from `solo-leveling-game-frontend`
- Upload `out/` as the Pages artifact
- Deploy to Pages

Your site URL will be:
- `https://kk-gaming.github.io/solo-leveling-game/`

## Notes
- If you fork/rename the repo, update `repo` in `next.config.ts` (or supply a basePath env) so links route correctly under GitHub Pages.
- GitHub Pages serves static sites; client-side routing works, but direct deep links require trailingSlash (enabled) or proper 404 rewrites.
