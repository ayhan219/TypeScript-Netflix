const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AuthRouter = require("./router/UserRouter")
dotenv.config();


app.use("/auth",AuthRouter);

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, async() => {
  console.log(`server listening on PORT: ${process.env.PORT}`);
  await connectToDB();
});
