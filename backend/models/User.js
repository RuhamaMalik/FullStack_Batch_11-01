import mongoose from "mongoose"
import bcrypt from "bcryptjs"


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  contact: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
}, {
  timestamps: true
}) 


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next()
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
}
)

//// 123456  ---- sfewjr4j548523232323485849y234u343$%^%^%^

// custom method

userSchema.methods.comparePassword = function(plainTextPass){
 return bcrypt.compare(plainTextPass, this.password)
}

// comparePassword(req.body.password, user.password)

const User = mongoose.model("user", userSchema)

export default User;