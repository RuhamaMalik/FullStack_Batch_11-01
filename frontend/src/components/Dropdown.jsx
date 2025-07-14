import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
=======
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
>>>>>>> Bushrajan

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

<<<<<<< HEAD
    // Nested sub-items for specific categories
=======
>>>>>>> Bushrajan
    const nestedItems = {
        "Camera & Photo": ["DSLR", "Mirrorless", "Lenses"],
        "Video & Game": ["PC Games", "Consoles", "Streaming Devices"],
        "Computer & Laptop": ["Smartphones", "Cases", "Chargers"],
<<<<<<< HEAD
        "Games & Consoles":  ["PlayStation", "Xbox", "Nintendo Switch", "PC Games"],
    };

    // Animation variants
=======
        "Games & Consoles": ["PlayStation", "Xbox", "Nintendo Switch", "PC Games"],
    };

>>>>>>> Bushrajan
    const containerVariants = {
        open: { transition: { staggerChildren: 0.15 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    const itemVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -10 },
    };

    return (
<<<<<<< HEAD
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
=======
        <>
            {/* Desktop Dropdown */}
            <div
                className="lg:inline-block hide-cate relative text-left"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <button className="flex gap-3 justify-center items-center mx-auto px-1 lg:w-[315px] py-2 font-extrabold text-white bg-black border-0 hover:bg-red-500">
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
                            className="absolute z-40 w-[315px] bg-white shadow"
                        >
                            {items.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="group px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 hover:text-red-500 relative flex justify-between items-center"
                                >
                                    <span>{item}</span>
                                    {nestedItems[item] && (
                                        <>
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

                                            <motion.ul
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="absolute left-full top-0 w-[150px] bg-white border shadow-md z-20 hidden group-hover:block"
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
                                        </>
                                    )}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Sidebar */}
            <div className="hide-catemobile hidden justify-center items-center mt-3">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex gap-3 justify-center items-center mx-auto px-5 w-full py-2 font-extrabold text-white bg-black border-0 hover:bg-red-500"
                >
                    <svg width="32" height="32" className="ml-3" viewBox="0 0 24 24">
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
                    {isSidebarOpen && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed top-0 left-0 w-full h-full bg-white z-40 shadow-lg overflow-y-auto"
                        >
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg mt-4 ml-4"
                            >
                                Close
                            </button>
                            <ul className="mt-6 px-4">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-2 border-b border-gray-200 hover:text-red-500 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Dropdown;
>>>>>>> Bushrajan
