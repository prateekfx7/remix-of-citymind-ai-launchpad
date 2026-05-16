# Deploy to Vercel

## One-time setup
1. Push this project to GitHub (Lovable → + menu → GitHub → Connect project).
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects `vercel.json` — leave all build settings on **Default**.
4. Click **Deploy**.

## Build settings (already in `vercel.json`)
- Install: `bun install`
- Build: `bun run build`
- Output: `dist/client`
- Framework preset: Other
- SPA fallback: all routes rewrite to `/index.html`

## Notes
- This deploys as a **static SPA**. Client-side routing (TanStack Router) works on refresh thanks to the rewrite rule.
- Server functions / SSR are **not** active on Vercel with this config (the project's primary build target is Cloudflare Workers via Lovable hosting). The current app has no server functions, so this is fine.
- If you later add server functions and want them on Vercel, you'll need to swap the Vite adapter to the Vercel preset — that change would break Lovable publishing.

## Environment variables
Add any `VITE_*` env vars in **Vercel → Project → Settings → Environment Variables**, then redeploy.
