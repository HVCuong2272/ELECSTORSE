const expressAsyncHandler = require("express-async-handler");
const { data } = require("../data");
const Product = require("../models/productModel");

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

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
});

const getProductById = expressAsyncHandler(async (req, res) => {
  //   const product = await Product.findById(req.params.id).populate(
  //     "seller",
  //     "seller.name seller.logo seller.rating seller.numReviews"
  //   );
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).send({ message: "Product not Found" });
  }
  res.send(product);
});

const productElement = expressAsyncHandler(async (req, res) => {
  const product = new Product({
    name: "sample name",
    image1: "/assets/images/productImage/p6.jpg",
    image2: "/assets/images/productImage/p6.jpg",
    image3: "/assets/images/productImage/p6.jpg",
    price: 0,
    category: "sample category",
    brand: "sample brand",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    description: "sample description",
  });
  const createProduct = await product.save();
  res.send({ message: "Product Created", product: createProduct });
});

module.exports = {
  createProductSeed,
  getAllProducts,
  getProductById,
  productElement,
};
