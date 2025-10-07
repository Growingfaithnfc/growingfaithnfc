import { pickRandomVerse, renderHTML } from './common.js';
export default async function handler(req, res) {
  try {
    const verse = await pickRandomVerse();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(renderHTML({ ...verse }));
  } catch (e) {
    res.status(500).send('Error loading verse.');
  }
}
