import express from "express";
import { registration, studentAttendance, verifyStudent, validateStudentId, validateTransactionId, classFee, fetchFee } from "../Controller/Student.Controller.js";
const router=express.Router();
router.post("/verifyStudent",verifyStudent);
router.post("/registration",registration);
router.post("/studentAttendance",studentAttendance);
router.post("/validateStudentId",validateStudentId);
router.post("/validateTransactionId",validateTransactionId);
router.post("/classfee",classFee);
router.post("/fetchFee",fetchFee);

export default router;