let sites = {};

export default function handler(req, res) {
  const { name } = req.body;

  if (sites[name]) {
    sites[name].status = sites[name].status === "active" ? "inactive" : "active";
  }

  res.json({ success: true });
}
