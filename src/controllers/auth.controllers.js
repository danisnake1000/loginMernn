import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccToken } from "../libs/jwt.js";
import nodemailer from "nodemailer";

export const register = async (req, res) => {
  const { password, username, email } = req.body;
  try {
    const hashs = await bcrypt.hash(password, 10);
    const newUser = new User({
      password: hashs,
      username,
      email,
     
    });
  
    const userSave = await newUser.save();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service:"gmail",
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: "grupo3Tiger@gmail.com",
        pass: "lwxxnirelajsphmm",
      },
    });
       transporter.sendMail({
        from: '"Dani Fernandez"',
        to:"adriandanielfernandez@gmail.com",
        subject:" inicio de sesion",
        body:"este es tu codigo para iniciar sesion",
        text:"Hola"
      })
    const token = await createAccToken({id:userSave._id})

    res.cookie("token", token);
  
    res.json({
      id: userSave._id,
      username: userSave.username,
      email: userSave.email,
      createdAt: userSave.createdAt,
      userSave: userSave.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

export const login = async (req, res) => {
  const { password,email} = req.body;
  try {

    const userFound = await User.findOne({email})
    if (!userFound) {
      return res.status(400).json({message: 'User not foud'})
        
    }
   
    const isMatch= await bcrypt.compare(password, userFound.password) ;
    if (!isMatch) {
      return res.status(400).json({message: 'Incorrect password'})
      
    }

    const token = await createAccToken({id:userFound._id})

    res.cookie("token", token);
    
  
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message:error.message});
  }


};

export const logout =(req, res) => {
  res.cookie("token","",{ expires:new Date(0)})
  return res.sendStatus(200)
}

export const profile = async(req, res) => {
  const userFound = await User.findById(req.user.id)
  if (!userFound) {
    return res.status(400).json({message: "User not found"})
    
  }
  return res.json({
    id: userFound._id,
    username:userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })

}



