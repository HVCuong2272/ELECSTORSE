const expressAsyncHandler = require('express-async-handler');
const { data } = require("../data");
const Order = require("../models/orderModel");

const createOrder = expressAsyncHandler(async (req, res) => {
    // console.log(req.body);
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: "Cart is empty" });
    } else {
        const order = new Order({
            // seller: req.body.orderItems[0].seller,
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user.id,
        });
        // console.log('weee', order);
        const createdOrder = await order.save();
        res
            .status(201)
            .send({ message: "New Order Created", order: createdOrder });
    }
})


const getOrderByID =  expressAsyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    } else {
        res.status(404).send({message: 'Order Not Found'});
    }
})

module.exports = {
    createOrder,
    getOrderByID
};