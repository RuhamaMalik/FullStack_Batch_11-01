import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const middlewareToProtect = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];


    if (!token) {
      res.status(401).json({ success: false, message: "Token not provided!" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();

  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid / Expired token!" })
  }
}



/////// index.js ------- base 
////// models ---- user
////// controller ---- user (sign up, sign in);
//////  models ---- user --- use midlleware to hash password
//////  utils ---- jwt --- use(sign up, sign in)
////// routes ------ auth routes
////// index.js ------ connect routes
/////  middlewares ---- authMiddleware ---- protectRoutect