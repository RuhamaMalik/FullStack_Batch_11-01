import User from "../models/User.js";

export const signUp = async(req,res)=>{
try {

  const {name, email,password} = req.body;

  if(!name|| !email|| !password){
    res.status(400).json({success : false,
    message:"Missing required fields",})
  }

  
  /// check user
  const isExist = await User.findOne({email});

  if(isExist){
     res.status(400).json({success : false,
    message:"User Already Registered!"})
  }

  /// create user
 


  const user =  await User.create(req.body);
  
  
} catch (error) {
  res.status(500).json({
    success : false,
    message:"SignUp Failed",
    error:error.message
  })
}
}