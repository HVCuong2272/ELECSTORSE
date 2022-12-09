const expressAsyncHandler = require("express-async-handler");
const RollBackOrder = require("../models/rollBackOrderModel");

const createOrderRollBack = expressAsyncHandler(async (req, res) => {
  // console.log("aduu", req.user);
  const checkRollbackOrder = await RollBackOrder.find({
    orderId: req.params.orderId,
  }).countDocuments();
  //   console.log("fsdcxv", checkRollbackOrder);
  if (checkRollbackOrder === 0) {
    const rollbackOrder = new RollBackOrder({
      userBuyId: req.user.id,
      orderId: req.params.orderId,
      totalOrderPrice: req.body.totalOrderPrice,
      userPaymentRollBack: req.body.userPaymentRollBack,
      reasonCancel: req.body.reasonCancel,
    });
    const createRollbackOrder = await rollbackOrder.save();
    return res.send({
      message: "RollBack Order Created",
      rollbackOrder: createRollbackOrder,
    });
  }
  return res.status(400).send({ message: "You already send rollback request" });
});

const getAllRollbackOrders = expressAsyncHandler(async (req, res) => {
  // const seller = req.query.seller || "";
  // const sellerFilter = seller ? { seller } : {};
  // console.log("wwwwqe", sellerFilter);
  // const searchValue = req.query.searchValue || "";
  // const searchValueRegex = new RegExp(searchValue, "i");

  // console.log("regex", regex);
  // const searchValueFilter = searchValue
  //   ? { paymentMethod: { $regex: regex } }
  //   : {};
  // const month = parseInt(req.query.month) - 1;
  // const year = parseInt(req.query.year);
  // const fromDate = new Date(year, month, 1);
  // const toDate = new Date(year, month + 1, 1);
  // console.log("fromdata", fromDate.toString());
  // console.log("todate", toDate.toString());
  const orders = await RollBackOrder.find({
    // ...sellerFilter, // use to filter before populate
    // createdAt: { $gte: fromDate, $lt: toDate },
  }).populate({
    path: "user",
    select: "name",
  });

  // use to filter after populate
  const orderReturn = orders.filter(
    // similar to order.user.name.includes(searchValue) ||order.paymentMethod.includes(searchValue)
    // but use regex here can check also uppercase and lower case
    (order) =>
      searchValueRegex.test(order.user.name) ||
      // searchValueRegex.test(order.paymentMethod) ||
      searchValueRegex.test(order._id)
  );
  res.send(orderReturn);
});

module.exports = {
  createOrderRollBack,
  getAllRollbackOrders,
};
