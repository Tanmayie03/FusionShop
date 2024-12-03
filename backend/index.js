import express from "express";
import cors from "cors";
import connectDb from "./config/mongodb.js";
import "dotenv/config";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";

const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary;
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.listen(port, () => console.log("Server started on :  " + port));
