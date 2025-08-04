import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { getToken } from "../../utils/auth";

const ProductDrawer = ({
    isOpen,
    onClose,
    categories,
    products,
    setProducts,
    isEditing = false,
    initialData = null,
}) => {
    const fileInputRef = useRef(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [stock, setStock] = useState(null);
    const [description, setDescription] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [images, setImages] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);

    const token = getToken();

    /////////////  pre-fill form for editing

    // useEffect(() => {
    //     if (isEditing && initialData) {
    //         setTitle(initialData.name || "");
    //         setDescription(initialData.description || "");
    //         setSelectedImage(`${import.meta.env.VITE_BACKEND_UPLOAD_URL}/${initialData.image}`);
    //     } else {
    //         setTitle("");
    //         setDescription("");
    //         setSelectedImage(null);
    //         setImageFile(null);
    //     }
    // }, [isEditing, initialData, isOpen]);


    // /////////////// images

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImagesChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length + images.length > 5) {
            alert("You can only upload a maximum of 5 images.");
            return;
        }

        const newImagePreviews = files.map((file) => URL.createObjectURL(file));
        setImages((prev) => [...prev, ...newImagePreviews]);
        setImageFiles((prev) => [...prev, ...files]);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (imageFiles.length < 2) {
            alert("At least 2 images are required.");
            return;
        }

        const formData = new FormData();
        formData.append("name", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("category", selectedCategory);

        imageFiles.forEach((file) => {
            formData.append("images", file); // multiple files --- same field name
        });


        try {
            if (isEditing) {
                //  update category
                // const response = await axios.put(
                //     `${import.meta.env.VITE_BACKEND_URL}/categories/${initialData._id}`,
                //     formData,
                //     {
                //         headers: {
                //             "Content-Type": "multipart/form-data",
                //             Authorization: `Bearer ${token}`,
                //         }

                //     });
                // const updated = response.data.category;

                // setCategories((prev) =>
                //     prev.map((cat) => (cat._id === updated._id ? updated : cat))
                // );
                // alert("Category updated successfully");
            } else {
               // create product
                const response = await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/products`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        }

                    }
                );
                // console.log(response.data.product);
                
                setProducts([response.data.product, ...products]);
                alert("Product created successfully");
            }


            setTitle("");
            setDescription("");
            setPrice("");
            setStock("");
            setSelectedCategory("");
            setImages([]);
            setImageFiles([]);
            onClose();
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Failed to save category");
        }
    };

    return (
        <div
            className={`fixed overflow-y-scroll top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
      w-[90%] md:max-w-[460px] max-w-[360px] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-black border-b">
                <h2 className="text-xl text-white font-semibold">
                    {isEditing ? "Update Product" : "Add Product"}
                </h2>
                <button
                    onClick={onClose}
                    className="text-white pb-0.5 px-2 pt-0.2 rounded-md bg-red-600 text-2xl font-bold hover:bg-red-700 transition"
                >
                    &times;
                </button>
            </div>

            {/* Form */}

            <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white h-full overflow-y-auto">
                <label className="block text-sm font-medium text-gray-700">Product Images</label>

                {/* images */}

                <div className="flex flex-col items-center">
                    <div
                        className="w-42 h-42 border border-gray-300 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center mb-4 cursor-pointer hover:ring-2 hover:ring-red-400 transition"
                        onClick={handleImageClick}
                    >
                        {images[0] ? (
                            <img src={images[0]} alt="Main" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-400 text-sm">Click to Upload Images</span>
                        )}
                    </div>

                    {/* hidden file input */}
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        ref={fileInputRef}
                        onChange={handleImagesChange}
                        style={{ display: "none" }}
                    />
                </div>

                {/* //////////  images preview */}
                {images.length > 1 && (
                    <div className="flex flex-wrap gap-2">
                        {images.slice(1).map((img, index) => (
                            <div key={index} className="w-20 h-20 border rounded overflow-hidden">
                                <img src={img} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                )}

                <div>
                    <label htmlFor="productTitle" className="block text-sm font-medium text-gray-700">
                        Product Title
                    </label>
                    <input
                        id="productTitle"
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter product title"
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        min={0}
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter product Price"
                    />
                </div>

                {/* /////// category dropdown */}

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        id="category"
                        required
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                    >
                        <option value=""> Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>



                <div>
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                        Stock
                    </label>
                    <input
                        id="stock"
                        type="number"
                        min={0}
                        required
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter product Stock"
                    />
                </div>

                <div>
                    <label htmlFor="textArea" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="textArea"
                        rows="4"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter product description"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                >
                    {isEditing ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    );
};


export default ProductDrawer
