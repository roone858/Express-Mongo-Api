import jwt from 'jsonwebtoken';

export const generateToken = (payload: any) => {
  return jwt.sign(
    {
      payload,
    },
    String(process.env.TOKEN_SECRET_KEY),
    { expiresIn: '1h' },
  );
};
