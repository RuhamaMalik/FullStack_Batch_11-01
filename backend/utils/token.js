import jwt from "jsonwebtoken";

export const signInToken = (user)=>{
 return jwt.sign(
  {id:user._id, role:user.role,email:user.email},
  process.env.JWT_SECRET,
 { expiresIn:"1h"}
 )
}
