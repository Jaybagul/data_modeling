import mongoose from "mongoose";

const userModel = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,

    },
    mobileNumber: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["M", "F", "O"]
    },




}, { timestamps: true })

export const User = mongoose.model("User", userModel)