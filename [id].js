import { pickRandomVerse, renderHTML } from './common.js';
export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const verse = await pickRandomVerse();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(renderHTML({ ...verse, tagId: id }));
  } catch (e) {
    res.status(500).send('Error loading verse.');
  }
}
