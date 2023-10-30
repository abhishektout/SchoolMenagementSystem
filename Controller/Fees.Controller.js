import { response } from "express"
import { StudentPersonalInfo } from "../Model/StudentPersonalInfo.Model"
import { StudentFee } from "../Model/StudentFee.Model"

export const validateStudentId = (reqest, response) => {
    StudentPersonalInfo.findById(reqest.body.studentid).then(res => {
        return response.status(200).json({ result: "student id is valid" })
    }).catch(err => {
        return response.status(500).json({ err: "student id is not valid" })
    })
}
export const validateTransactionId = (reqest, response) => {
   StudentFee.find({transactionId:reqest.body.transactionId}).then(res => {
    if(res.length<2)
     return response.status(200).json({ result: "student id is valid" })
    else
    return response.status(200).json({ result: "student id is valid" })
        
    }).catch(err => {
        return response.status(500).json({ err: "student id is not valid" })
    })
}