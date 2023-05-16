import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/store")
  .then(() => 
  
  console.log("Connected database successfly"))
  .catch((err) => {
    console.log("Connected Faild Error : ", err.message);
  });
