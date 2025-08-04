import Category from "../models/Category.js";
import cloudinary from "../utils/cloudinary.js";
import slugify from "slugify";
// import fs from "fs";
// import path from "path";


/////////// create category ////////////

export const createCategory = async (req, res) => {
  // console.log(cloudinary);
  
  try {
    const { name, description } = req.body;
    const slug = slugify(name, { lower: true });

    const isExists = await Category.findOne({ slug });
    if (isExists)
      return res.status(400).json({ message: "Category already exists" });


    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        {
          folder: "dimita-categories", // cloudinary folder name --- optional
          resource_type: "image",
        },
        async (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return res
              .status(500)
              .json({ message: "Image upload failed", error });
          }

          // save category with imaage
          const category = await Category.create({
            name,
            slug,
            description,
            image: result.secure_url,
            public_id: result.public_id
          });

          return res
            .status(201)
            .json({ message: "Category created successfully", category });
        }
      );

      
      result.end(req.file.buffer);  // trigger


    } else {
      const category = await Category.create({
        name,
        slug,
        description,
        image: "", 
      });

      res
        .status(201)
        .json({ message: "Category created without image", category });
    }


  } catch (err) {
    console.error("Category create error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


// export const createCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     // console.log(name, description);
    
//     const slug = slugify(name, { lower: true });

//     // Check duplicate
//     const isExists = await Category.findOne({ slug });
//     if (isExists) return res.status(400).json({ message: "Category already exists" });

//     const image = req.file ? req.file.filename : '';

//     const category = await Category.create({
//       name,
//       slug,
//       description,
//       image,
//     });

//     res.status(201).json({ message: "Category created successfully", category });
//   } catch (err) {
//     console.error("Category create error:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

/////////// get all categories ////////////



export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 }); 
    res.status(200).json({ success: true, categories });
  } catch (err) {
    console.error("Get categories error:", err);
    res.status(500).json({ success: false, message: "Server error" , err:err.message});
  }
};


/////////// delete category ////////////

// export const deleteCategory = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const category = await Category.findById(id);
//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     // delete image

//     if (category.image) {
//       const imagePath = path.join("uploads", category.image);
//       fs.unlink(imagePath, (err) => {
//         if (err) {
//           console.error("Error deleting image:", err.message);
//         } else {
//           console.log("Image deleted:", category.image);
//         }
//       });
//     }

//     // delete category 
//     await Category.findByIdAndDelete(id);

//     res.status(200).json({ message: "Category deleted successfully" });
//   } catch (err) {
//     console.error("Delete category error:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };




export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // delete image from cloudinary if exists
    if (category.public_id) {
      try {
        const result = await cloudinary.uploader.destroy(category.public_id);
        console.log("Cloudinary image deleted:", result);
      } catch (error) {
        console.error("Error deleting image from Cloudinary:", error.message);
      }
    }

    // delete category
    await Category.findByIdAndDelete(id);

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error("Delete category error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

/////////// update category

// export const updateCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const { id } = req.params;

//     const category = await Category.findById(id);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     //   replace image
//     if (req.file) {

//       // delete old image
//       const oldImagePath = path.join("uploads", category.image);
//       if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);

//       category.image = req.file.filename;
//     }

//     //update 

//     if (name) {
//          const slug = slugify(name, { lower: true });
//         category.name = name; 
//         category.slug = slug; 
//     }
//     if (description) category.description = description;

//     await category.save();

//     res.json({
//       success: true,
//       message: "Category updated successfully",
//       category,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };



export const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

   // delete old image and upload new
    if (req.file) {
     
      if (category.public_id) {
        try {
          await cloudinary.uploader.destroy(category.public_id);
        } catch (err) {
          console.error("Old image delete error:", err.message);
        }
      }

      // upload new 
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "dimita-categories",
          resource_type: "image",
        },
        async (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return res.status(500).json({ message: "Image upload failed", error });
          }

          
          category.image = result.secure_url;
          category.public_id = result.public_id;

         
          if (name) {
            category.name = name;
            category.slug = slugify(name, { lower: true });
          }
          if (description) category.description = description;

          await category.save();

          return res.json({
            success: true,
            message: "Category updated successfully",
            category,
          });
        }
      );

      uploadStream.end(req.file.buffer);
    } else {
     
      if (name) {
        category.name = name;
        category.slug = slugify(name, { lower: true });
      }
      if (description) category.description = description;

      await category.save();

      res.json({
        success: true,
        message: "Category updated successfully",
        category,
      });
    }
  } catch (err) {
    console.error("Update category error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};




/////////// update category status

export const updateCategoryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body; 

    const category = await Category.findById(id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    category.isActive = isActive;
    await category.save();

    res.json({
      success: true,
      message: "Category status updated successfully",
      category,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
