let sites = {};

export default function handler(req, res) {
  const { name, code } = req.body;

  sites[name] = {
    code,
    status: "active"
  };

  res.json({ success: true });
}
