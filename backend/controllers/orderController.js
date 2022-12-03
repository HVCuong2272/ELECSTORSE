const expressAsyncHandler = require("express-async-handler");
const { data } = require("../data");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const SellerPay = require("../models/sellerPayModel");
const { sendEmail, thankEmail } = require("../services/sendMail");
const { logging } = require("googleapis/build/src/apis/logging");

const createOrder = expressAsyncHandler(async (req, res) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: "Cart is empty" });
  } else {
    const orderItemsClone = req.body.orderItems;
    const sellerIds = orderItemsClone.map((orderItem) => {
      return orderItem.seller;
    });
    var sellerIdsWithoutDuplicate = Array.from(new Set(sellerIds));
    // console.log("aaaaaaa", sellerIdsWithoutDuplicate);
    for (product of orderItemsClone) {
      const productItem = await Product.findById(product.product);
      if (productItem) {
        // product.countInStock -= product.qty;
        productItem.countInStock -= product.qty;
        if (productItem.countInStock < 0) {
          return res.status(400).json({
            message: `${productItem.name} has sold out. Please Remove It From Your Cart!`,
          });
        }
      }
    }
    for (product of orderItemsClone) {
      const productItem = await Product.findById(product.product);
      if (productItem) {
        product.countInStock -= product.qty;
        productItem.countInStock -= product.qty;
      }
      const updateProductItem = await productItem.save();
    }
    const order = new Order({
      seller: sellerIdsWithoutDuplicate,
      orderItems: orderItemsClone,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user.id,
    });
    const createdOrder = await order.save();
    if (createdOrder.paymentMethod === "Card") {
      var orderDetailHTML = createdOrder.orderItems.map((orderItem) => {
        return `<tr>
          <td style="border:0.5px; border:solid; border-color:rgb(124, 124, 124); width: 106px; text-align: center;">
            ${orderItem.name} x${orderItem.qty}
          </td>
          <td style="border:0.5px; border:solid; border-color:rgb(124, 124, 124); width: 106px; text-align: center;">
            ${orderItem.price * orderItem.qty}
          </td>
        </tr>`;
      });

      thankEmail(
        createdOrder.shippingAddress.email,
        "url gì đó",
        "Confirm order",
        orderDetailHTML.join(""),
        createdOrder.totalPrice
      );
    }
    res.status(201).send({ message: "New Order Created", order: createdOrder });
  }
});

const getOrderByID = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

const updateOrderByID = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };
    const updatedOrder = await order.save();
    for (product of updatedOrder.orderItems) {
      const newSellerPayOrder = new SellerPay({
        sellerId: product.seller._id,
        userBuyId: updatedOrder.user,
        orderId: updatedOrder._id,
        productId: product.product,
        productName: product.name,
        productPrice: product.price,
        userBuyQuantity: product.qty,
        totalSellerPrice: product.price * product.qty,
        payMonth: new Date().getMonth() + 1,
        payYear: new Date().getFullYear(),
      });
      const createdSellerPayOrder = await newSellerPayOrder.save();
    }
    res.send({ message: "Order Paid", order: updatedOrder });
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

const deliverOrder = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    if (order.paymentMethod === "Card") {
      order.isPaid = true;
      order.paidAt = Date.now();
    }

    const updatedOrder = await order.save();
    res.send({ message: "Order Delivered", order: updatedOrder });
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

const getOrderHistory = expressAsyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  // const orders = await Order.find({
  //   $or: [
  //     { user: req.user.id, isPaid: true },
  //     { user: req.user.id, paymentMethod: "Card" },
  //   ],
  // });
  res.send(orders);
});

const getOrderList = expressAsyncHandler(async (req, res) => {
  const seller = req.query.seller || "";
  const sellerFilter = seller ? { seller } : {};
  // console.log("wwwwqe", sellerFilter);
  const searchValue = req.query.searchValue || "";
  const searchValueRegex = new RegExp(searchValue, "i");

  // console.log("regex", regex);
  // const searchValueFilter = searchValue
  //   ? { paymentMethod: { $regex: regex } }
  //   : {};
  const month = parseInt(req.query.month) - 1;
  const year = parseInt(req.query.year);
  const fromDate = new Date(year, month, 1);
  const toDate = new Date(year, month + 1, 1);
  // console.log("fromdata", fromDate.toString());
  // console.log("todate", toDate.toString());
  const orders = await Order.find({
    ...sellerFilter, // use to filter before populate
    createdAt: { $gte: fromDate, $lt: toDate },
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

const deleteOrder = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    const deletedOrder = await order.remove();
    res.send({ message: "Order Deleted", order: deletedOrder });
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

const paySummary = expressAsyncHandler(async (req, res) => {
  const month = parseInt(req.query.month) - 1;
  const year = parseInt(req.query.year);
  const searchValue = req.query.searchValue || "";
  const searchValueRegex = new RegExp(searchValue, "i");
  // console.log("weqwqw", req.query.month, req.query.year);
  const fromDate = new Date(year, month, 1);
  const toDate = new Date(year, month + 1, 1);
  console.log("fromdata", fromDate.toString());
  console.log("todate", toDate.toString());
  const condition = {
    // createdAt: { $gte: fromDate, $lte: toDate },
    createdAt: { $gte: fromDate, $lt: toDate },
    isPaid: true,
  };
  const orderOfSeller = await Order.find(condition).select("orderItems _id");
  const orderHaveSeller = await Order.find(condition).select("seller _id");
  const orderItems = orderOfSeller.map((orderItems) => {
    return orderItems.orderItems;
  });
  const orderItemsReduce = orderItems.flat().map((orderItem) => {
    return {
      sellerId: orderItem.seller._id,
      sellerName: orderItem.seller.seller.name,
      totalFromOrder: orderItem.price * orderItem.qty,
      orderId: [],
      // orderId: orderItem._id,
    };
  });
  let result = Object.values(
    orderItemsReduce.reduce((acc, curr) => {
      let item = acc[curr.sellerId];

      if (item) {
        item.totalFromOrder += curr.totalFromOrder;
        // item.orderId = [item.orderId, curr.orderId].flat();
      } else {
        acc[curr.sellerId] = curr;
      }

      return acc;
    }, {})
  );
  for (response of result) {
    for (ohs of orderHaveSeller) {
      if (ohs.seller.some((ohsId) => ohsId.equals(response.sellerId))) {
        response.orderId.push(ohs._id);
      }
    }
  }
  console.log("qqq", result);
  const resultFilter = result.filter(
    (item) =>
      searchValueRegex.test(item.sellerName) ||
      searchValueRegex.test(item.sellerId)
  );
  res.send({ result: resultFilter });
});

const paySummary1 = expressAsyncHandler(async (req, res) => {
  const month = parseInt(req.query.month) - 1;
  // const month = 11;
  const year = parseInt(req.query.year);
  // const year = 2022;
  const searchValue = req.query.searchValue || "";
  const searchValueRegex = new RegExp(searchValue, "i");
  // console.log("weqwqw", req.query.month, req.query.year);
  const fromDate = new Date(year, month, 1);
  const toDate = new Date(year, month + 1, 1);
  console.log("fromdata", fromDate.toString());
  console.log("todate", toDate.toString());
  const condition = {
    // createdAt: { $gte: fromDate, $lte: toDate },
    createdAt: { $gte: fromDate, $lt: toDate },
  };
  const sellerPayListByMonth = await SellerPay.aggregate([
    { $match: condition },
    {
      $group: {
        _id: "$sellerId",
        totalFromMonth: { $sum: "$totalSellerPrice" },
        orderId: { $addToSet: "$orderId" },
      },
    },
    {
      $sort: { totalFromMonth: 1 },
    },
  ]);
  for (sellerDetail of sellerPayListByMonth) {
    const checkAdminPayCondition = {
      ...condition,
      sellerId: sellerDetail._id,
      isAdminPay: true,
    };
    const checkAdminPay = await SellerPay.find(
      checkAdminPayCondition
    ).countDocuments();
    // console.log("dsasas", checkAdminPay);
    if (checkAdminPay > 0) {
      sellerDetail.isAdminPay = true;
    } else {
      sellerDetail.isAdminPay = false;
    }
    const userName = await User.findById(sellerDetail._id).select(
      "name seller"
    );
    sellerDetail.sellerName = userName.name;
    sellerDetail.sellerShopName = userName.seller.name;
    sellerDetail.paymentSalaryMethod = userName.seller.paymentSalaryMethod;
  }
  // console.log("sdsdsd", sellerPayListByMonth);
  const resultFilter = sellerPayListByMonth.filter(
    (item) =>
      searchValueRegex.test(item.sellerName) ||
      searchValueRegex.test(item.sellerShopName) ||
      searchValueRegex.test(item._id)
  );
  res.send({ result: resultFilter });
});

const paySellerSalary = expressAsyncHandler(async (req, res) => {
  // console.log(req.params.id, req.query.payMonth, req.query.payYear);
  const updatesellerPayListByMonth = await SellerPay.updateMany(
    {
      sellerId: req.params.id,
      payMonth: req.query.payMonth,
      payYear: req.query.payYear,
    },
    { isAdminPay: true }
  );
  res.send("Update Successfully");
});

module.exports = {
  createOrder,
  getOrderByID,
  updateOrderByID,
  getOrderHistory,
  getOrderList,
  deleteOrder,
  deliverOrder,
  paySummary,
  paySummary1,
  paySellerSalary,
};
