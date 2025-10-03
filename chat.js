export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const reply = `AI Response to: "${message}"`;
    res.status(200).json({ reply });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}