import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function getVerses() {
  const filePath = path.join(__dirname, '../../data/verses.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function pickRandomVerse() {
  const verses = await getVerses();
  const n = Math.floor(Math.random() * verses.length);
  return verses[n];
}

export function renderHTML({ ref, text, tagId = null }) {
  const tagLine = tagId ? `<div style="opacity:.6;font-size:12px;margin-top:8px">Bracelet: ${tagId}</div>` : '';
  const brand = "Growing Faith";
  const colors = {"black": "#000000", "white": "#FFFFFF", "coffee": "#6F4E37", "olive": "#556B2F"};
  const cta = "Jesus Loves You";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${ref} — Growing Faith</title>
  <meta name="theme-color" content="${colors.white}">
  <style>
    :root {
      --black: ${colors.black}; --white: ${colors.white};
      --coffee: ${colors.coffee}; --olive: ${colors.olive};
    }
    body{font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial;margin:0;background:var(--white);color:#111}
    .wrap{max-width:600px;margin:0 auto;padding:24px}
    .card{border:1px solid #eaeaea;border-radius:14px;padding:20px;box-shadow:0 2px 10px rgba(0,0,0,.02)}
    h1{font-size:22px;margin:0 0 6px}
    p{font-size:18px;margin:0 0 14px}
    .brand{display:flex;justify-content:space-between;align-items:center;margin:16px 0 0 0;font-size:12px;opacity:.7}
    .btn{display:inline-block;padding:10px 14px;border:1px solid var(--black);border-radius:10px;text-decoration:none;color:#111}
    .cta{margin-top:8px;padding:8px 10px;border-radius:8px;background:var(--coffee);color:var(--white);display:inline-block}
    .accent{height:6px;background:linear-gradient(90deg,var(--olive),var(--coffee),var(--black));border-radius:6px;margin-bottom:14px}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="accent"></div>
    <div class="card">
      <h1>${ref}</h1>
      <p>${text}</p>
      <a class="btn" href="/nfc" aria-label="Get another verse">Another verse</a>
      <span class="cta">Jesus Loves You</span>
      ${tagLine}
      <div class="brand"><span>Growing Faith</span><span>Random verse on tap</span></div>
    </div>
  </div>
</body>
</html>`;
}
