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

    const product = await productModel.findOne({ id: productId });
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
      (item) => item.productId === productId
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

    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }
    const productIds = cart.items.map((item) => item.productId);
    const products = await productModel.find({ id: { $in: productIds } });

    const populateCartItems = cart.items.map((item) => {
      const product = products.find((prod) => prod.id === item.productId);
      return {
        productId: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: item.quantity,
      };
    });

    res.status(200).json({
      success: true,
      message: "All Cart Products retrieved successfully",
      data: { ...cart._doc, items: populateCartItems },
    });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch cart items",
      error: error.message || error,
    });
  }
};

const updateCartItemQty = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || quantity <= 0) {
      return res.status(400).json({ success: false, message: "Invalid data" });
    }

    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );

    if (itemIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Product not in cart" });
    }

    if (quantity === 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart item updated successfully",
    });
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update cart item quantity",
      error: error.message || error,
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
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found!",
      });
    }
    const initialItemCount = cart.items.length;
    cart.items = cart.items.filter(
      (item) => item.productId !== Number(productId)
    );
    if (initialItemCount === cart.items.length) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart!",
      });
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;

    await cartModel.deleteMany({ userId: userId });

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to clear cart", error: error.message });
  }
};
export {
  addToCart,
  updateCartItemQty,
  clearCart,
  deleteCartItem,
  fetchCartItems,
};
