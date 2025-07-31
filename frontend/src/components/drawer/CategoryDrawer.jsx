import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { getToken } from "../../utils/auth";

const CategoryDrawer = ({
    isOpen,
    onClose,
    categories,
    setCategories,
    isEditing = false,
    initialData = null,
}) => {
    const fileInputRef = useRef(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const token = getToken();

    /////////////  pre-fill form for editing

    useEffect(() => {
        if (isEditing && initialData) {
            setTitle(initialData.name || "");
            setDescription(initialData.description || "");
            setSelectedImage(`${import.meta.env.VITE_BACKEND_UPLOAD_URL}/${initialData.image}`);
        } else {
            setTitle("");
            setDescription("");
            setSelectedImage(null);
            setImageFile(null);
        }
    }, [isEditing, initialData, isOpen]);

    const handleAvatarClick = () => fileInputRef.current.click();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const imageURL = URL.createObjectURL(file);
            setSelectedImage(imageURL);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            alert("Title is required.");
            return;
        }

        const formData = new FormData();
        formData.append("name", title);
        formData.append("description", description);
        if (imageFile) formData.append("image", imageFile);

        try {
            if (isEditing) {
                //  update category
                const response = await axios.put(
                    `${import.meta.env.VITE_BACKEND_URL}/categories/${initialData._id}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        }

                    });
                const updated = response.data.category;

                setCategories((prev) =>
                    prev.map((cat) => (cat._id === updated._id ? updated : cat))
                );
                alert("Category updated successfully");
            } else {
                // 
                // create category
                const response = await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/categories`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        }

                    }
                );
                setCategories([response.data.category, ...categories]);
                alert("Category created successfully");
            }

            // reset form + close drawer

            setTitle("");
            setDescription("");
            setImageFile(null);
            setSelectedImage(null);
            onClose();
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Failed to save category");
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
      w-[90%] max-w-[360px] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-black border-b">
                <h2 className="text-xl text-white font-semibold">
                    {isEditing ? "Update Category" : "Add Category"}
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
                <label className="block text-sm font-medium text-gray-700">Category Image</label>
                <div className="flex flex-col items-center">
                    <div
                        className="w-42 h-42 border border-gray-300 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center mb-2 cursor-pointer hover:ring-2 hover:ring-red-400 transition"
                        onClick={handleAvatarClick}
                    >
                        {selectedImage ? (
                            <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-400 text-sm">Click to Upload</span>
                        )}
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </div>

                <div>
                    <label htmlFor="categoryTitle" className="block text-sm font-medium text-gray-700">
                        Category Title
                    </label>
                    <input
                        id="categoryTitle"
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter category title"
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
                        placeholder="Enter category description"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                >
                    {isEditing ? "Update Category" : "Add Category"}
                </button>
            </form>
        </div>
    );
};

export default CategoryDrawer;
