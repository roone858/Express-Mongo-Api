import bcrypt from 'bcrypt';

export const generateHash = (password: string) => {
  return bcrypt.hashSync(
    password + process.env.HASH_PASSWORD_KEY,
    Number(process.env.SALT_ROUNDS),
  );
};

export const compareHash = (password: string, hash:string) => {
  return bcrypt.compareSync(password+ process.env.HASH_PASSWORD_KEY, hash);
};
