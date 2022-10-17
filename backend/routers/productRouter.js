const productRouter = require("express").Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.getAllProducts);
productRouter.get("/seed", productController.createProductSeed);
productRouter.get("/:id", productController.getProductById);

module.exports = productRouter;
