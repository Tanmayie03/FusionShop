import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Your JWT secret here
    req.user = decoded; // Attach user data to the request object
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }
};
export default adminAuth;
