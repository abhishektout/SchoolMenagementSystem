import mongoose from "mongoose";
const studentPersonalInfoSchema = new mongoose.Schema({
    stdId: {
        type: Number,
        unique: true,
    },
    stdName: {
        type: String,
        required: true,
    },
    stdFname:{
        type:String,
        require:true
    },
    stdMothername:{
        type:String,
        require:true
    },
    stdGender: {
        type:String,
        require:true
    },
    stdClass:{
        type:String,
        require:true
    },
    stdAddress:{
        type:String,
        require:true
    },
    stdFee:{
        type:Number,
        require:true
    },
    dob: {
        type: String,
        required: true,
    },
    aadharNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    castNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    birthCertificateNumber: Number,
    incomeProofNumber: Number,
    lastYearRollNumber: Number,
});

export const StudentPersonalInfo = mongoose.model('studentPersonalInfo', studentPersonalInfoSchema);
