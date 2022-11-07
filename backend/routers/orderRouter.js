const orderRouter = require("express").Router();
const authMiddle = require('../middlewares/authMiddleware');
const orderController = require("../controllers/orderController");
const Order = require("../models/orderModel");

orderRouter.post(
    "/",
    authMiddle.isAuth,
    orderController.createOrder
);

orderRouter.get(
    '/mine', 
    authMiddle.isAuth, 
    orderController.getOrderHistory,
);

orderRouter.get(
    '/:id', 
    authMiddle.isAuth, 
    orderController.getOrderByID,
);

orderRouter.put(
    '/:id/pay',
    authMiddle.isAuth,orderController.updateOrderByID,
);
module.exports = orderRouter