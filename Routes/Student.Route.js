import express from "express";
import { registration, studentAttendance, verifyStudent } from "../Controller/Student.Controller.js";
const router=express.Router();
router.post("/verifyStudent",verifyStudent);
router.post("/registration",registration);
router.post("/studentAttendance",studentAttendance);

export default router;