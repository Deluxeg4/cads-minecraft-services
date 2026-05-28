<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# CADS Minecraft Services

Standalone Vite app for CADS Minecraft Services.

## Cloudflare Worker

This project has its own Worker configuration:

- Worker name: `cads-minecraft-services`
- Route: `dev.2b2t-th.org/*`
- Static assets directory: `dist`

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy

1. Build the app:
   `npm run build`
2. Deploy the Worker:
   `wrangler deploy`

Or run both:
`npm run deploy`
