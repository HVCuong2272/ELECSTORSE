const expressAsyncHandler = require('express-async-handler');
const { data } = require("../data");
const User = require("../models/userModel");

const createUserSeed = expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})

module.exports = {
    createUserSeed
};