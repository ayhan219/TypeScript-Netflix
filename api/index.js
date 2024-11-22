const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AuthRouter = require("./router/UserRouter")
const cookieParser = require("cookie-parser")
const ItemRouter = require("./router/ItemRouter")
const cors = require("cors");
dotenv.config();


app.use(cors({
  origin:"http://localhost:3000",
  credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",AuthRouter);
app.use("/api/movie",ItemRouter)



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
