// const authRouter = require('./auth.router')

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const authRouter = require("./authRouter");

module.exports = (app) => {
    app.use("/api/users", authRouter),
        app.use("/api/users", userRouter),
        app.use("/api/products", productRouter);
};
