import mongoose, { mongo } from "mongoose";

const doctorModel = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experinceInyears: {
        type: Number,
        required: true
    },
    workInhospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ("Hospital")
    }]

})

export const Doctor = mongoose.model("Doctor", doctorModel)