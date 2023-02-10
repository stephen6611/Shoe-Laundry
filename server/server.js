import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import midtransClient from "midtrans-client";
import axios from "axios";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
// app.post("/api/finish", (req, res) => {
//   console.log(req);
// });
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//midtrans
app.use(cors());

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});
app.post("/api/midtrans", (req, res) => {
  console.log(req.body);
  let parameter = {
    transaction_details: {
      order_id: req.body.orderId,
      gross_amount: req.body.amount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: req.body.name,
      email: "testmidtrans@mail.com",
      phone: "08111222333",
    },
  };
  snap.createTransaction(parameter).then((transaction) => {
    let transactionToken = transaction.token;
    console.log("transactionToken:", transactionToken);
    res.send(transactionToken);
  });
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
