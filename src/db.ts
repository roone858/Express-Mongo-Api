import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(`mongodb://localhost:27017/${process.env.DATABASE_NAME}`)
  .then(() =>
    console.log(`Connected database successfully : ${process.env.DATABASE_NAME}`),
  )
  .catch((err) => {
    console.log('Connected Fails Error : ', err.message);
  });
