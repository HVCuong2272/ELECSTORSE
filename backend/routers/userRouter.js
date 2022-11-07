const userRouter = require("express").Router();
const userController = require('../controllers/userController');

userRouter.get("/seed", userController.createUserSeed);

userRouter.get('/:id', userController.userProfileDetail);

module.exports = userRouter