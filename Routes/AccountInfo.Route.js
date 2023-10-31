import express from 'express';
import { verifyTransactioId } from '../Controller/AccountInfo.Controller.js';
const router=express.Router();
router.post("/verifyTransactioId",verifyTransactioId)
export default router;