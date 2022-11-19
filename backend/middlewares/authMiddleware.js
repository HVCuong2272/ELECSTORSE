const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

// const generateToken = (user) => {
//     return jwt.sign(
//         {
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             isSeller: user.isSeller,
//         },
//         process.env.JWT_SECRET || "somethingsecret",
//         {
//             expiresIn: "30d",
//         }
//     );
// };

const isAuth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Invalid Authentication." });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Invalid Authentication." });

      req.user = user;
      //   // console.log("chamcam", user);
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const isAdmin = async (req, res, next) => {
  const user = await Users.findById(req.user.id);

  //   if (req.user && req.user.isAdmin) {
  if (req.user && user.isAdmin === true) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
const isSeller = (req, res, next) => {
  if (req.user && req.user.isSeller) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Seller Token" });
  }
};
const isSellerOrAdmin = (req, res, next) => {
  if (req.user && (req.user.isSeller || req.user.isAdmin)) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin/Seller Token" });
  }
};

module.exports = {
  // generateToken,
  isAuth,
  isAdmin,
  isSeller,
  isSellerOrAdmin,
};
