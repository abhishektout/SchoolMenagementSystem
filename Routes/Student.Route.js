import express from "express";
import { feeCollection, registration, verifyStudent } from "../Controller/Student.Controller.js";
const router=express.Router();
router.post("/verifyStudent",verifyStudent);
router.post("/registration",registration);
router.post("/feeCollection",feeCollection)

export default router;