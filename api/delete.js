let sites = {};

export default function handler(req, res) {
  const { name } = req.body;

  delete sites[name];

  res.json({ success: true });
}
