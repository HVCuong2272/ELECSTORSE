const orderRouter = require("express").Router();
const authMiddle = require("../middlewares/authMiddleware");
const orderController = require("../controllers/orderController");
const Order = require("../models/orderModel");

orderRouter.get(
  "/",
  [authMiddle.isAuth, authMiddle.isAdmin],
  orderController.getOrderList
);

orderRouter.post("/", authMiddle.isAuth, orderController.createOrder);

orderRouter.get("/mine", authMiddle.isAuth, orderController.getOrderHistory);

orderRouter.get("/:id", authMiddle.isAuth, orderController.getOrderByID);

orderRouter.delete(
  "/:id",
  [authMiddle.isAuth, authMiddle.isAdmin],
  orderController.deleteOrder
);

orderRouter.put("/:id/pay", authMiddle.isAuth, orderController.updateOrderByID);
module.exports = orderRouter;
