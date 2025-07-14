import User from "../models/User.js";
import { signInToken } from "../utils/token.js";

export const signUp = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Missing required fields",
      })
    }


    /// check user
    const isExist = await User.findOne({ email });

    if (isExist) {
      res.status(400).json({
        success: false,
        message: "User Already Registered!"
      })
    }

    /// create user

    const user = await User.create(req.body);
    const token = signInToken(user);
    res.status(201).json({ user, token, success: true, message: "user created successfully!" });




  } catch (error) {
    res.status(500).json({
      success: false,
      message: "SignUp Failed",
      error: error.message
    })
  }
}




////// login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials"
      })
    }

    const token = signInToken(user);
    res.status(201).json({ user, token, success: true, message: "user logged in successfully!" });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Sigin Failed",
      error: error.message
    })
  }
}


