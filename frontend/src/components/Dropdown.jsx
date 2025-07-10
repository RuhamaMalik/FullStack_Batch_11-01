import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        "Browse categories",
        "Audio & Home Theater",
        "Camera & Photo",
        "Computer & Laptop",
        "Headphones & speaker",
        "Smartphone & Accessories",
        "Video & Game",
        "Battery & Accessories",
        "Games & Consoles",
        "Headphones",
    ];

    // Nested sub-items for specific categories
    const nestedItems = {
        "Camera & Photo": ["DSLR", "Mirrorless", "Lenses"],
        "Video & Game": ["PC Games", "Consoles", "Streaming Devices"],
        "Computer & Laptop": ["Smartphones", "Cases", "Chargers"],
        "Games & Consoles":  ["PlayStation", "Xbox", "Nintendo Switch", "PC Games"],
    };

    // Animation variants
    const containerVariants = {
        open: { transition: { staggerChildren: 0.15 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    const itemVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -10 },
    };

    return (
        <div
            className="relative inline-block text-left "
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex gap-3 justify-center items-center mx-auto px-5 lg:w-[315px]  w-[100%] py-2 font-extrabold text-white bg-black border-0 border-gray-300 hover:bg-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path
                        fill="white"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 4.5h16m-16 10h16m-16-5h16m-16 10h16"
                    />
                </svg>
                BROWSER CATEGORIES
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={containerVariants}
                        className="absolute z-40 lg:w-[315px] w-[200px] bg-white  shadow border-0"
                    >
                        {items.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="group px-4 py-2 relative text-sm cursor-pointer hover:bg-gray-100 hover:text-red-500 flex justify-between items-center"
                            >
                                <span>{item}</span>

                                {/* Show SVG if nested items exist */}
                                {nestedItems[item] && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        className="ml-2 text-gray-600 group-hover:text-red-500"
                                    >
                                        <path
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="0.2"
                                            d="M9.879 17.243a1 1 0 0 1-.707-1.707L12.707 12L9.172 8.464a1 1 0 0 1 1.414-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.243a1 1 0 0 1-.707.293"
                                        />
                                    </svg>
                                )}

                                {/* Nested sub-menu */}
                                {nestedItems[item] && (
                                    <motion.ul
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="absolute left-full top-0  w-[150px] bg-white border border-gray-200 shadow-md z-20 hidden group-hover:block"
                                    >
                                        {nestedItems[item].map((subItem, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className="px-4 py-2 text-sm hover:bg-gray-100 text-black hover:text-red-600 cursor-pointer"
                                            >
                                                {subItem}
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
