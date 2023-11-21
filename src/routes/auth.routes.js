import { Router } from "express";
import {login ,register,logout,profile}from "../controllers/auth.controllers.js"
import { auhtRequired} from "../middlewares/validateToken.js";

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.get('/profile',auhtRequired,profile)


export default router