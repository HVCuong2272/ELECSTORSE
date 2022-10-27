const orderRouter = require("express").Router();
const authMiddle = require('../middlewares/authMiddleware');
const orderController = require("../controllers/orderController");
orderRouter.post(
    "/",
    authMiddle.isAuth,
    orderController.createOrder
);

module.exports = orderRouter