import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default:1
    },
    // images: {
    //   type: [String], 
    //   validate: [arrayLimit, 'At least 2 images are required'],
    // },

    images: [
    {
      url: String,
      public_id: String,
    },
  ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// function arrayLimit(val) { 
// }

export default mongoose.model('product', productSchema);
