import express from "express";
import { registration,feeCollection, studentAttendance, verifyStudent, classFee, fetchFee } from "../Controller/Student.Controller.js";

const router=express.Router();
router.post("/feeCollection",feeCollection)
router.post("/verifyStudent",verifyStudent);
router.post("/registration",registration);
router.post("/studentAttendance",studentAttendance);
router.post("/classfee",classFee);
router.post("/fetchFee",fetchFee);
export default router;