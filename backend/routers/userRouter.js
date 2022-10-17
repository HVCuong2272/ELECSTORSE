const userRouter = require("express").Router();
const userController = require('../controllers/userController');

userRouter.get("/seed", userController.createUserSeed);

module.exports = userRouter