const productRouter = require("express").Router();
const productController = require("../controllers/productController");

const authMiddle = require("../middlewares/authMiddleware");

productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  [authMiddle.isAuth, authMiddle.isAdmin],
  productController.productElement
);

productRouter.get("/seed", productController.createProductSeed);
productRouter.get("/:id", productController.getProductById);

productRouter.put(
  "/:id",
  [authMiddle.isAuth, authMiddle.isAdmin],
  productController.editProduct
);

productRouter.delete(
  "/:id",
  [authMiddle.isAuth, authMiddle.isAdmin],
  productController.deleteProduct
);

module.exports = productRouter;
