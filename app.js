import express from "express";
const app = express();
const port = 5000;
import {
  fakeDeliveryList,
  fakeDetailOrder,
  fakeOrderList,
} from "./constant.js";
import cors from "cors";

// enable cors
app.use(cors());
app.options("*", cors());

app.get("/orders", (req, res) => {
  console.log("req", req);
  const pageParam = Number(req.query.page);
  const limitParam = Number(req.query.limit);

  const minIndexItem = (pageParam - 1) * limitParam;
  const maxIndexIndex = pageParam * limitParam;

  const responseData = fakeOrderList.filter((value, index) => {
    if (minIndexItem <= index && maxIndexIndex > index) return true;
  });

  res.send({
    code: 1,
    data: {
      list: responseData,
      pagination: {
        page: pageParam,
        limit: limitParam,
        total: fakeOrderList.length,
      },
    },
    message: "Thành công !",
    success: true,
  });
});

app.get("/orders/:id", (req, res) => {
  const responseData = fakeDetailOrder.find(
    (value) => value.id === req.params.id
  );

  res.send({
    // data: {
    //   hello: "haha",
    // },
    code: 1,
    data: {
      order: responseData,
    },
    message: "Thành công !",
    success: true,
  });
});

app.get("/3pls", (req, res) => {
  const pageParam = Number(req.query.page);
  const limitParam = Number(req.query.limit);

  const minIndexItem = (pageParam - 1) * limitParam;
  const maxIndexIndex = pageParam * limitParam;

  const responseData = fakeDeliveryList.filter((value, index) => {
    if (minIndexItem <= index && maxIndexIndex > index) return true;
  });

  res.send({
    code: 1,
    data: {
      list: responseData,
      pagination: {
        page: pageParam,
        limit: limitParam,
        total: fakeDeliveryList.length,
      },
    },
    message: "Thành công !",
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
