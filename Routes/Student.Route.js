import express from "express";
import { registration,feeCollection, studentAttendance, verifyStudent, validateStudentId, validateTransactionId, classFee, fetchFee } from "../Controller/Student.Controller.js";

const router=express.Router();
router.post("/verifyStudent",verifyStudent);
router.post("/registration",registration);
router.post("/fees",feeCollection)
router.post("/studentAttendance",studentAttendance);
router.post("/classfee",classFee);
router.post("/fetchFee",fetchFee);

export default router;