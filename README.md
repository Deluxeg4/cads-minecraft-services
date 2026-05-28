# CADS Minecraft Services

เว็บไซต์ Landing Page สำหรับ CADS Studio บริการรับทำ Minecraft Server แบบครบวงจร

## Services

- Setup เซิร์ฟเวอร์มายคราฟ
- เขียนและแก้ไข Plugin
- จูน Performance และวางระบบ Proxy Network
- ทำเว็บไซต์และระบบหลังบ้าน
- ทำบอท Discord สำหรับ community/server workflow
- ดูแลหลังการขายแบบ Lifetime Support สำหรับงานที่ส่งมอบ

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Run Locally

ต้องมี Node.js ติดตั้งก่อน

```bash
npm install
npm run dev
```

เปิดเว็บที่:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

ไฟล์ production จะอยู่ใน `dist/`

## Deploy

โปรเจกต์นี้มี Cloudflare Worker configuration:

- Worker name: `cads-minecraft-services`
- Route: `dev.2b2t-th.org/*`
- Static assets directory: `dist`

Deploy:

```bash
npm run deploy
```
