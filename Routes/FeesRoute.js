import express from 'express';
import { validateStudentId, validateTransactionId } from '../Controller/Fees.Controller';
const router=express.Router();
router.post("/validateStudentId",validateStudentId);
router.post("validateTransactionId",validateTransactionId);
export default router;