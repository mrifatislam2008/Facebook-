import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const PASSWORD = process.env.ADMIN_PASSWORD;

export default async function handler(req, res) {
  const { password } = req.body;

  if (password === PASSWORD) {
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return res.json({ success: true, token });
  }

  res.json({ success: false });
}
