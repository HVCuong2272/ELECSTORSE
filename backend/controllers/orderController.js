const expressAsyncHandler = require("express-async-handler");
const { data } = require("../data");
const Order = require("../models/orderModel");
const { sendEmail, thankEmail } = require("../services/sendMail");

const createOrder = expressAsyncHandler(async (req, res) => {
  // console.log(req.body);
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: "Cart is empty" });
  } else {
    const order = new Order({
      // seller: req.body.orderItems[0].seller,
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user.id,
    });
    const createdOrder = await order.save();
    if (createdOrder.paymentMethod === "Card") {
      thankEmail(
        createdOrder.shippingAddress.email,
        "url gì đó",
        "Confirm order"
      );
    }
    res.status(201).send({ message: "New Order Created", order: createdOrder });
  }
});

const getOrderByID = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

const updateOrderByID = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };
    const updatedOrder = await order.save();
    res.send({ message: "Order Paid", order: updatedOrder });
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});
const getOrderHistory = expressAsyncHandler(async (req, res) => {
  const orders = await Order.find({
    $or: [
      { user: req.user.id, isPaid: true },
      { user: req.user.id, paymentMethod: "Card" },
    ],
  });
  res.send(orders);
});

module.exports = {
  createOrder,
  getOrderByID,
  updateOrderByID,
  getOrderHistory,
};
