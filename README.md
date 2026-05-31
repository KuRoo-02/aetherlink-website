# Aetherlink Global

Static Next.js site for Aetherlink Global Sdn Bhd.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static Build

This project is configured for static hosting:

- `next.config.ts` uses `output: "export"`
- images are unoptimized for static hosting
- `trailingSlash: true` emits folder-style routes like `about/index.html`

Build locally with:

```bash
npm run build
```

The static website is generated into `out/`.

## cPanel Shared Hosting

The GitHub Actions workflow `Build cPanel Static Site` builds the static export and uploads a downloadable artifact:

```txt
aetherlink-cpanel-static.zip
```

To deploy manually:

1. Go to GitHub Actions.
2. Run or open the latest `Build cPanel Static Site` workflow.
3. Download the `aetherlink-cpanel-static` artifact.
4. Extract `aetherlink-cpanel-static.zip`.
5. Upload the extracted contents into cPanel `public_html`.

Upload the contents of the zip, not the zip folder itself. The files such as `index.html`, `_next/`, `images/`, and `.htaccess` should sit directly inside `public_html`.
