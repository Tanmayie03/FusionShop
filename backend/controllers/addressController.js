import addressModel from "../models/address.js";

const addOrderAddress = async (req, res) => {
  try {
    const { userId, address, city, pincode, phone } = req.body;

    if (!userId || !address || !city || !pincode || !phone) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided!",
      });
    }

    const newCreatedAddress = new addressModel({
      userId,
      address,
      city,
      pincode,
      phone,
    });

    await newCreatedAddress.save();

    res.status(201).json({
      success: true,
      data: newCreatedAddress,
    });
  } catch (e) {
    console.error("Error while adding address:", e.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default addOrderAddress;
