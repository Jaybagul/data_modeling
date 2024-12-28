import mongoose, { mongo } from "mongoose";

const medicalRecord = new mongoose.Schema({

    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ("Patient")
    },
    age: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    pastsurgery: [{
        type: String
    }]

})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecord)