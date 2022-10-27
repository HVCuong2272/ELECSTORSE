const orderRouter = require("express").Router();
const authMiddle = require('../middlewares/authMiddleware');
const orderController = require("../controllers/orderController");
const expressAsyncHandler = require("express-async-handler");
orderRouter.post(
    "/",
    authMiddle.isAuth,
    orderController.createOrder
);

orderRouter.get(
    '/:id', 
    authMiddle.isAuth, 
    orderController.getOrderByID,
);

module.exports = orderRouter