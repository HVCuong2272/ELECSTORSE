const expressAsyncHandler = require('express-async-handler');
const { data } = require("../data");
const User = require("../models/userModel");

const createUserSeed = expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})

const userProfileDetail = expressAsyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if (user){
        res.send(user);
    } else {
        res.status(404).send({message: 'User Not Found'});
    }
})

module.exports = {
    createUserSeed,
    userProfileDetail
};