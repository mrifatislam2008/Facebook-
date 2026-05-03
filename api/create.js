import { verify } from "./middleware.js";

let sites = {};

export default function handler(req, res) {
  if (!verify(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { name, code } = req.body;

  sites[name] = {
    code,
    status: "active"
  };

  res.json({ success: true });
}
