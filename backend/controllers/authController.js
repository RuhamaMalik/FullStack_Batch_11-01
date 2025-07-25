import User from "../models/User.js";
import _sendEmail from "../utils/Email.js";
import { signInToken } from "../utils/token.js";
import jwt from "jsonwebtoken";


//// signup

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
      res.status(200).json({
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

    // Step 1: Get user with password
    const user = await User.findOne({ email }).select("+password"); // get password for comparison

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials"
      });
    }

    // Step 2: Remove password before sending user data to client
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    const token = signInToken(user);
    res.status(201).json({
      user: userWithoutPassword,
      token,
      success: true,
      message: "user logged in successfully!"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Signin Failed",
      error: error.message
    });
  }
};

////////// forgot  Password

export const forgotPswd = async (req, res) => {
console.log(">>>>>>>>>>>>> ");

  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  ////// reset token

  const resetToken = jwt.sign({ id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1m" })

  // reset frontend url

  const resetURL = `${process.env.WEBSITE_URL}/reset-password?token=${resetToken}`

  try {

    await _sendEmail({
      to: user.email,
      subject: "Reset Password",
      html: `
         <div style="margin: 0 auto; width: 90%; height: 500px;">
          <h1 style="color: gold;" >Reset Password</h1>
          <p style="color: gray;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam maxime vero libero.</p>
          <p>Click here to reset <a href="${resetURL}">Reset </a></p>
        </div>
        `
    })


     res.status(200).json({
      success: true,
      message: "Password reset email sent successfully!"
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Email send Failed",
      error: error.message
    });
  }

}

//////// profile

export const profile = (req, res) => {
  res.status(200).json({ success: true, user: req.user })
}