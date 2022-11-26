const expressAsyncHandler = require("express-async-handler");
const { data } = require("../data");
const Product = require("../models/productModel");

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

const createProductSeed = expressAsyncHandler(async (req, res) => {
  // console.log(data);
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
    name: "sample name " + Date.now(),
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

const editProduct = expressAsyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image1 = req.body.image1;
    product.image2 = req.body.image2;
    product.image3 = req.body.image3;
    product.category = req.body.category;
    product.brand = req.body.brand;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    res.send({ message: "Product Updated", product: updatedProduct });
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    const deleteProduct = await product.remove();
    res.send({ message: "Product Deleted", product: deleteProduct });
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

module.exports = {
  createProductSeed,
  getAllProducts,
  getProductById,
  productElement,
  editProduct,
  deleteProduct,
};
