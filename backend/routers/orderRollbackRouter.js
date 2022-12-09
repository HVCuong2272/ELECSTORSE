const orderRollbackRouter = require("express").Router();
const orderRollbackController = require("../controllers/orderRollbackController");

const authMiddle = require("../middlewares/authMiddleware");

orderRollbackRouter.post(
  "/:orderId",
  authMiddle.isAuth,
  orderRollbackController.createOrderRollBack
);
orderRollbackRouter.get("/", orderRollbackController.getAllRollbackOrders);
// productRouter.post(
//   "/",
//   [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
//   productController.productElement
// );

// productRouter.get("/seed", productController.createProductSeed);
// productRouter.get("/:id", productController.getProductById);

// productRouter.put(
//   "/:id",
//   [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
//   productController.editProduct
// );

// productRouter.delete(
//   "/:id",
//   [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
//   productController.deleteProduct
// );

module.exports = orderRollbackRouter;
