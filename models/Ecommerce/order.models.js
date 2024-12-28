import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

})

const orderModel = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String

    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending"
    }


})

export const Order = mongoose.model("Order", orderModel)