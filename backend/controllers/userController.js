import userModel from "../models/user.js";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await userModel.findOne({
      email: body.email,
      password: body.password,
    });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exists" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    return res.status(200).json({ success: true, message: "User login".token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const body = req.body;
    const exist = await userModel.findOne({ email: body.email });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const newUser = new userModel({
      name: body.name,
      email: body.email,
      password: body.password,
    });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(411).json({ message: error.message });
  }
};
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.status(200).json({ success: true, token });
    }
  } catch (error) {
    res.status(411).json({ success: false, message: "Invalid Credentials" });
  }
};

export { loginUser, registerUser, adminLogin };
