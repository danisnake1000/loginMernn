import mongoose from "mongoose";

export const conecctDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/logindb");
    console.log("Conectado a loginDB");
  } catch (error) {
    console.log(error);
  }
};

