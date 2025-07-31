import React from "react";

const ProducttDrawer = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
             w-[90%] max-w-[360px] 
             ${isOpen ? "translate-x-0" : "translate-x-full"}`
            }>

            {/* Drawer Header */}
            <div className="flex justify-between items-center p-4 bg-black border-b">
                <h2 className="text-xl text-white font-semibold">Add Product</h2>
                <button onClick={onClose}
                    className="text-white  pb-0.5 px-2 pt-0.2 rounded-md bg-red-600 text-2xl font-bold hover:bg-red-700 transition">&times;</button>
            </div>

            {/* Drawer form */}
            <form className="p-4 space-y-4 bg-white h-full">

                {/* product name */}
                <div>
                    <label htmlFor="pName" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        id="pName"
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter product name"
                    />
                </div>
                {/* product category */}
                <div>
                    <label htmlFor="pCat" className="block text-sm font-medium text-gray-700">Product category</label>
                    <input
                        id="pCat"
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter product Category"
                    />
                </div>
                {/* product discription */}
                <div>
                    <label htmlFor="textArea" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="textArea"
                        rows="5"
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter product description"
                    ></textarea>
                </div>
                {/* product image */}
                <div>
                    <label htmlFor="fileImage" className="block text-sm  font-medium text-gray-700">Upload Image</label>
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-700
                        file:mr-1 file:py-2 file:px-5
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-white file:text-gray-700
                        hover:file:bg-gray-200
                        appearance-none"
                    />
                </div>
                {/* submit button */}
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                    Add Product
                </button>
            </form>
        </div>
    );
};


export default ProducttDrawer
