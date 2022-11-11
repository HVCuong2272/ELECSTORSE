const userRouter = require("express").Router();
const userController = require('../controllers/userController');
const authMiddle = require('../middlewares/authMiddleware')

userRouter.get("/seed", userController.createUserSeed);

userRouter.get('/:id', userController.userProfileDetail);

userRouter.put(
    '/profile',
    authMiddle.isAuth, 
    userController.userProfileUpdate);

module.exports = userRouter