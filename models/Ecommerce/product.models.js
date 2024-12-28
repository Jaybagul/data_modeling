import mongoose from "mongoose";

const productModel = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ("Category")
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ("User")
    }


})

export const Product = mongoose.model("Product", productModel)