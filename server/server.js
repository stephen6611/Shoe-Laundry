import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import midtransClient from "midtrans-client";
// import bodyParser from "body-parser";
import cors from "cors";

import { v4 as uuidv4 } from "uuid";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//midtrans
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

// generete id
// let counter = 1;
// let prevRand = 1;
// const rand = (max = 10) => {
//   time = new Date().getTime();
//   randValue = (time / counter / (prevRand + 1)) % max;
//   counter++;
//   prevRand = randValue;
//   return randValue;
// };

app.use(cors());
let oidd = uuidv4();
app.post("/api/midtrans", (req, res) => {
  let parameter = {
    transaction_details: {
      order_id: uuidv4(),
      gross_amount: 10000,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: "budi",
      last_name: "pratama",
      email: "budi.pra@example.com",
      phone: "08111222333",
    },
  };

  snap.createTransaction(parameter).then((transaction) => {
    // transaction token
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
