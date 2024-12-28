import mongoose, { mongo } from "mongoose";

const hospitalModel = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    addrsssLine1: {
        type: String,
        required: true
    },
    addrsssLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    spcializedIn: [
        {
            type: String
        }
    ]

}, { timestamps: true })

export const Hospital = mongoose.model("Hospital", hospitalModel)