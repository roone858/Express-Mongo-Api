import jwt from "jsonwebtoken";

export const verifyToken = (token: any) => {
  return jwt.verify(
    token,
    String(process.env.TOKEN_SECRET_KEY),
    (err: any, decoded: any) => {
      if (err) return false;
      if (decoded) return true;
    }
  );
};
