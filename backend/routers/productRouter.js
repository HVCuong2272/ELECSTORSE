const productRouter = require("express").Router();
const productController = require("../controllers/productController");

const authMiddle = require("../middlewares/authMiddleware");

productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  productController.productElement
);

productRouter.get("/seed", productController.createProductSeed);
productRouter.get("/:id", productController.getProductById);

productRouter.put(
  "/:id",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  productController.editProduct
);

productRouter.delete(
  "/:id",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  productController.deleteProduct
);

module.exports = productRouter;
