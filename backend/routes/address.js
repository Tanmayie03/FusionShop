import express from "express";
import addOrderAddress from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.post("/add", addOrderAddress);

export default addressRouter;
