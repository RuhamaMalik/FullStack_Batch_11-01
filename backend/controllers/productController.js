import Product from "../models/Product.js";
import Category from "../models/Category.js";
import cloudinary from "../utils/cloudinary.js";
// import fs from "fs";
// import path from "path";
import slugify from "slugify";

// export const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, category, stock } = req.body;

// if (!name || !price || !category || !stock) {
//   return res.status(400).json({ message: "Missing required fields" });
// }

//     if (!req.files || req.files.length < 2) {
//       return res
//         .status(400)
//         .json({ message: "At least 2 images are required" });
//     }

//     const slug = slugify(name, { lower: true });

//     const imageFilenames = req.files.map((file) => file.filename);

//     const product = await Product.create({
//       name,
//       stock,
//       slug,
//       description,
//       price,
//       category,
//       images: imageFilenames,
//     });

//     // increment product count in category

// await Category.findByIdAndUpdate(category, {
//   $inc: { productCount: 1 },
// });

//     res.status(201).json({ message: "Product created", product });
//   } catch (error) {
//     console.error("Product Create Error:", error);
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };

////////////////////// get all products

export const createProduct = async (req, res) => {
  try { 
    const { name, description, price, category, stock } = req.body;

    if (!name || !price || !category || !stock) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const files = req.files;

    if (!files || files.length < 2) {
      return res
        .status(400)
        .json({ message: "At least 2 images are required" });
    }

    if (files.length > 5) {
      return res.status(400).json({ message: "Maximum 5 images are allowed" });
    }

    const uploadedImages = [];

    /////////////// upload images one by one 

    for (let file of files) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "products",
            resource_type: "image",
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(file.buffer);
      });

      uploadedImages.push({
        url: result.secure_url,
        public_id: result.public_id,
      });
    }



    /////////////// images uploaded


    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      slug: slugify(name, { lower: true }),
      images: uploadedImages,
    });

    await Category.findByIdAndUpdate(category, {
      $inc: { productCount: 1 },
    });

    res.status(201).json({ message: "Product created successfully", product });
  } catch (err) {
    console.error("Create product error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name image")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Failed to get products:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
};

/////////// update product status

export const updateProductStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.isActive = isActive;
    await product.save();

    res.json({
      success: true,
      message: "Product status updated successfully",
      product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

/////////// delete product ////////////

// export const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     // console.log(id);

//     const product = await Product.findById(id);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     //  delete images
//     if (product.images && product.images.length > 0) {
//       product.images.forEach((image) => {
//         const imagePath = path.join("uploads", image);
//         if (fs.existsSync(imagePath)) {
//           fs.unlinkSync(imagePath);
//         }
//       });
//     }

   
//     await Product.findByIdAndDelete(id);

//     //  decrease productCount
//     await Category.findByIdAndUpdate(product.category, {
//       $inc: { productCount: -1 },
//     });

//     res
//       .status(200)
//       .json({ success: true, message: "Product deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting product:", error.message);
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to delete product" });
//   }
// };



export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // delete all images from cloudinary
    if (product.images && product.images.length > 0) {
      for (const image of product.images) {
        if (image.public_id) {
          try {
            await cloudinary.uploader.destroy(image.public_id);
          } catch (err) {
            console.error("Image delete failed:", err.message);
          }
        }
      }
    }

    // delete product
    await Product.findByIdAndDelete(id);

    // decrease productCount 
    if (product.category) {
      await Category.findByIdAndUpdate(product.category, {
        $inc: { productCount: -1 },
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
};