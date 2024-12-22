import cartModel from "../models/cart.js";
import productModel from "../models/product.js";

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided!",
      });
    }
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    let cart = await cartModel.findOne({ userId });

    if (!cart) {
      cart = new cartModel({ userId, items: [] });
    }
    const findCurrentProductIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (findCurrentProductIndex === -1) {
      cart.items.push({ productId, quantity });
    } else {
      cart.items[findCurrentProductIndex].quantity += quantity;
    }
    await cart.save();
    res.status(200).json({
      success: true,
      message: "Product added to cart successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error,
    });
  }
};

const fetchCartItems = async (req, res) => {
  try {
    const userId = req.user.userId;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User id required",
      });
    }

    const cart = await cartModel.findOne({ userId }).populate({
      path: "item.productId",
      select: "image, title, price sellPrice",
    });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }
    const validItems = cart.items.filter(
      (productItem) => productItem.productId
    );
    if (validItems.length < cart.items.length) {
      cart.items = validItems;
      await cart.save();
    }
    const populateCartItems = validItems.map((item) => ({
      productId: item.productId.id,
      image: item.productId.image,
      title: item.productId.title,
      price: item.productId.price,
      sellPrice: item.productId.sellPrice,
      quantity: item.quantity,
    }));

    res.status(200).json({
      success: true,
      message: "All Cart Product retrieved successfully",
      data: { ...cart._doc, items: populateCartItems },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error,
    });
  }
};

const updateCartItemQty = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided!",
      });
    }
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }
    const validItems = cart.items.filter(
      (productItem) => productItem.productId
    );

    if (findCurrentProductIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    cart.items[findCurrentProductIndex].quantity = quantity;
    await cart.save();

    await cart.populate({
      path: "items.productId",
      select: "image, title, price sellPrice",
    });

    const populateCartItems = validItems.map((item) => ({
      productId: item.productId ? item.productId.id : null,
      image: item.image ? item.productId.image : null,
      title: item.title ? item.productId.title : null,
      price: item.price ? item.productId.price : null,
      sellPrice: item.sellPrice ? item.productId.sellPrice : null,
      quantity: item.quantity,
    }));

    res.status(200).json({
      success: true,
      message: "Product updated to cart successfully",
      data: { ...cart._doc, items: populateCartItems },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error,
    });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    if (!userId || !productId) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided!",
      });
    }
    const cart = await cartModel.findOne({ userId }).populate({
      path: "item.productId",
      select: "image, title, price sellPrice",
    });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.id.toString() !== productId
    );
    await cart.save();
    await Cart.populate({
      path: "item.productId",
      select: "image, title, price sellPrice",
    });

    const populateCartItems = validItems.map((item) => ({
      productId: item.productId ? item.productId.id : null,
      image: item.productId ? item.productId.image : null,
      title: item.productId ? item.productId.title : null,
      price: item.productId ? item.productId.price : null,
      sellPrice: item.productId ? item.productId.sellPrice : null,
      quantity: item.quantity,
    }));

    res.status(200).json({
      success: true,
      message: "Product removed from cart successfully",
      data: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error,
    });
  }
};

export { addToCart, updateCartItemQty, deleteCartItem, fetchCartItems };
