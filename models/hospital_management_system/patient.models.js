import mongoose, { mongo } from "mongoose";

const PatientModel = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    diagonsedWith: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
    ,
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["M", "F", "O"]
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

})

export const Patient = mongoose.model("Patient", PatientModel)