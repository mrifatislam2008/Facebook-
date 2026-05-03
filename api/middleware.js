import jwt from "jsonwebtoken";

export function verify(req) {
  const token = req.headers.authorization;

  if (!token) return false;

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}
