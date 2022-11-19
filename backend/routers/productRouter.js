const productRouter = require("express").Router();
const productController = require("../controllers/productController");

const authMiddle = require("../middlewares/authMiddleware");

productRouter.get("/", productController.getAllProducts);
productRouter.get("/seed", productController.createProductSeed);
productRouter.get("/:id", productController.getProductById);

productRouter.post(
  "/",
  [authMiddle.isAuth, authMiddle.isAdmin],
  productController.productElement
);

module.exports = productRouter;
