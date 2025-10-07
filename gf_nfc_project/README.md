# Growing Faith — NFC Random Bible Verses (Vercel-ready)

Behavior: Every tap opens a URL that shows a random ESV verse. `/nfc` (generic) and `/nfc/{BRACELET-ID}` (per-bracelet).

Deploy (no custom domain):
1) Create a free Vercel account.
2) Import this project (ZIP) in the Vercel dashboard.
3) After deploy, you'll get a subdomain like `https://growing-faith-nfc.vercel.app` (use the exact domain Vercel gives you).
4) Test: `/nfc` and `/nfc/BRACELET-0001`

Customize:
- Edit verses in `data/verses.json` (ESV excerpts).
- Colors and CTA in `api/nfc/common.js`.

Program tags:
- Chip: NTAG213 (Type 2). Do NOT lock.
- Record: Single NDEF URL per tag.
- Example unique URL: `https://YOUR-VERCEL-SUBDOMAIN/nfc/BRACELET-0001`
- If you don't need unique tracking, use the same `/nfc` URL for all.
