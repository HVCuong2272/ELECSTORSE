const vnPayRouter = require("express").Router();
const vnPayController = require("../controllers/vnPayController");

// authRouter.get("/seed", authController.createUserSeed);

vnPayRouter.post("/checkout", vnPayController.checkoutPaymentVNP);
vnPayRouter.get("/:gateway/callback", vnPayController.callbackPaymentVNP);


module.exports = vnPayRouter