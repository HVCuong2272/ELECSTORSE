const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image1: { type: String },
                image2: { type: String },
                image3: { type: String },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
            },
        ],
        shippingAddress: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            address1: { type: String, required: true },
            address2: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            note: { type: String },
            //   lat: Number,
            //   lng: Number,
        },
        paymentMethod: { type: String, required: true },
        paymentResult: {
            id: String,
            status: String,
            update_time: String,
            email_address: String,
        },
        itemsPrice: { type: Number, required: true },
        shippingPrice: { type: Number, required: true },
        taxPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        // seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        isPaid: { type: Boolean, default: false },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date },
    },
    {
        timestamps: true,
    }
);
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
