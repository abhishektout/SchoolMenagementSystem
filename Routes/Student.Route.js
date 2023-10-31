import express from "express";
import { feeCollection,  studentAttendance,registration, verifyStudent } from "../Controller/Student.Controller.js";
const router=express.Router();
router.post("/feeCollection",feeCollection)
router.post("/verifyStudent",verifyStudent);
router.post("/registration",registration);
router.post("/studentAttendance",studentAttendance);
export default router;