const mongoose = require("mongoose");

const rollBackOrderSchema = new mongoose.Schema(
  {
    userBuyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    adminAcceptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalOrderPrice: { type: Number, required: true },
    userPaymentRollBack: { type: String },
    reasonCancel: {
      type: String,
    },
    adminResponseAcceptCancel: {
      type: String,
    },
    isAdminAccept: { type: Boolean, default: false, required: true },
    isAdminWatch: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const RollBackOrder = mongoose.model("RollBackOrder", rollBackOrderSchema);
module.exports = RollBackOrder;
