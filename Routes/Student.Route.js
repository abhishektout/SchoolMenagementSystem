import express from "express";
import { registration, verifyStudent } from "../Controller/Student.Controller.js";
const router=express.Router();
router.post("/verifyStudent",verifyStudent);
router.post("/registration",registration);

export default router;