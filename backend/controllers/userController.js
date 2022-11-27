const expressAsyncHandler = require("express-async-handler");
const { data } = require("../data");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUserSeed = expressAsyncHandler(async (req, res) => {
  // await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
});

const userProfileDetail = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

const userProfileUpdate = expressAsyncHandler(async (req, res) => {
  // console.log('bug vai shit',req.user);
  const user = await User.findById(req.user.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.avatar = req.body.avatar || user.avatar;
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 12);
    }
    const updateUser = await user.save();
    res.send({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      avatar: updateUser.avatar,
      isAdmin: updateUser.isAdmin,
      // token: generateToken(updateUser),
    });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

const getUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    if (user.isAdmin) {
      res.status(400).send({ message: "Cannot Delete Admin User" });
      return;
    }
    const deleteUser = await user.remove();
    res.send({ message: "User Deleted", user: deleteUser });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

module.exports = {
  createUserSeed,
  userProfileDetail,
  userProfileUpdate,
  getUsers,
  deleteUser,
};
