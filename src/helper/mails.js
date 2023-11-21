import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service:"gmail",
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "",
      pass: "",
    },
  });
     transporter.sendMail({
      from: "Dani Fernandez",
      to:"adriandanielfernandez@gmail.com",
      subject:"codigo de inicio de sesion",
      body:"este es tu codigo para iniciar sesion"
    })