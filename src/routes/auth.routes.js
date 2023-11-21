import { Router } from "express";
import {login ,register,logout,profile,email}from "../controllers/auth.controllers.js"
import { ahutRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.get('/profile',ahutRequired,profile)
router.post('/confirmacion',email)

export default router