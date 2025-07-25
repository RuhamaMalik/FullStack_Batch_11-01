import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const items = [
    { title: "Audio & Home Theater", path: "/audio" },
    { title: "Camera & Photo", path: "/camera" },
    { title: "Computer & Laptop", path: "/computer" },
    { title: "Headphones & speaker", path: "/headphones-speaker" },
    { title: "Smartphone & Accessories", path: "/smartphone" },
    { title: "Video & Game", path: "/video-game" },
    { title: "Battery & Accessories", path: "/battery" },
    { title: "Games & Consoles", path: "/games" },
    { title: "Headphones", path: "/headphones" },
  ];

  const nestedItems = {
    "Camera & Photo": [
      { title: "DSLR", path: "/camera/dslr" },
      { title: "Mirrorless", path: "/camera/mirrorless" },
      { title: "Lenses", path: "/camera/lenses" },
    ],
    "Video & Game": [
      { title: "PC Games", path: "/video-game/pc" },
      { title: "Consoles", path: "/video-game/consoles" },
      { title: "Streaming Devices", path: "/video-game/streaming" },
    ],
    "Computer & Laptop": [
      { title: "Smartphones", path: "/computer/smartphones" },
      { title: "Cases", path: "/computer/cases" },
      { title: "Chargers", path: "/computer/chargers" },
    ],
    "Games & Consoles": [
      { title: "PlayStation", path: "/games/playstation" },
      { title: "Xbox", path: "/games/xbox" },
      { title: "Nintendo Switch", path: "/games/nintendo" },
      { title: "PC Games", path: "/games/pc" },
    ],
  };

  const containerVariants = {
    open: { transition: { staggerChildren: 0.15 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
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
                  <a href={item.path} className="block w-full">
                    {item.title}
                  </a>

                  {nestedItems[item.title] && (
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
                        {nestedItems[item.title].map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-2 text-sm hover:bg-gray-100 text-black hover:text-red-600 cursor-pointer"
                          >
                            <a href={subItem.path} className="block w-full">
                              {subItem.title}
                            </a>
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
                    <a href={item.path} className="block w-full">
                      {item.title}
                    </a>
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
