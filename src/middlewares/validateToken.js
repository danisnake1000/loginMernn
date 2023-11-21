import jwt from "jsonwebtoken";
import { TOKEN_SECRET_KEY } from "../config.js";
export const ahutRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).json({ message: "no token, no autorizado" });
  }
  jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    console.log(user);
    req.user = user;
    next();
  });
};
