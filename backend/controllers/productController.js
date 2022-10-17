const expressAsyncHandler = require('express-async-handler');
const { data } = require("../data");
const Product = require("../models/productModel");

const getAllProducts = expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})

const createProductSeed = expressAsyncHandler(async (req, res) => {
    console.log(data);
    // await User.remove({});
    // const seller = await User.findOne({ isSeller: true });
    // if (seller) {
    //     const products = data.products.map((product) => ({
    //         ...product,
    //         seller: seller._id,
    //     }));
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
    // } else {
    //     res
    //         .status(500)
    //         .send({ message: "No seller found. first run /api/users/seed" });
    // }
})

const getProductById = expressAsyncHandler(async (req, res) => {
    //   const product = await Product.findById(req.params.id).populate(
    //     "seller",
    //     "seller.name seller.logo seller.rating seller.numReviews"
    //   );
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(404).send({ message: "Product not Found" });
    }
    res.send(product);
})

module.exports = {
    createProductSeed,
    getAllProducts,
    getProductById
};