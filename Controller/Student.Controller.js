import { request } from "express"
import { StudentPersonalInfo } from "../Model/StudentPersonalInfo.Model.js";

export const verifyStudent=async (request,response,next)=>{
    try{
        let student=await StudentPersonalInfo.findOne({aadharNumber:request.body.aadharNumber});
       console.log(student)
        return await student?response.status(200).json({result:"student is already register",status:true}):response.status(400).json({result:"student Not register",status:false})
    }
    catch(err){
        return response.status(500).json({ err: "internal server error", status: false });
    }
}

export const registration = async (request, response, next) => {
    try {
        const student = await StudentPersonalInfo.findOne({ aadharNumber: request.body.aadharNumber });
        if (!student) {
           let registration=await StudentPersonalInfo.create(request.body);
           console.log(registration)
        } else {
            return response.status(400).json({ result: "Student is already registered", status: false });
        }
    } catch (err) {
        console.log(err)
        return response.status(500).json({ err: "Internal server error", status: false });
    }
};
