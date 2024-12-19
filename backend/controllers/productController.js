import productModel from "../models/product.js";

const addProduct = async (req, res) => {
  try {
    const body = req.body;
    const newProduct = new productModel({
      id: body.id,
      title: body.title,
      description: body.description,
      price: body.price,
      image: body.image,
      category: body.category,
      subcategory: body.subcategory,
      size: body.size,
      rating: body.rating,
      count: body.count,
      date: Date.now(),
    });
    const savedProduct = await newProduct.save();
    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};
const displayProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};
const removeProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await productModel.findOneAndDelete({
      id: productId,
    });
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product removed successfully",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to remove product",
      error,
    });
  }
};
const singleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findOne({ id: productId });
    console.log("Fetched Product:", product);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product retrieved ",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

export { addProduct, displayProduct, removeProduct, singleProduct };
