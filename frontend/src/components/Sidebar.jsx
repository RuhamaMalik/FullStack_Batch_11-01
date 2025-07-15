import { Link } from "react-router-dom";
import { useState } from "react";
// iconss  ///
import {
    MdOutlineDashboard,
    MdOutlineShoppingCart,
    MdOutlineInventory2,
    MdChevronLeft,
    MdChevronRight,
} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline, IoPeopleOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LuMessageSquareText } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
// framer motion //
import { motion, AnimatePresence } from "framer-motion";


const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
    const [collapsed, setCollapsed] = useState(false);

    // navlinks
    const menuItems = [
        { name: "Dashboard", icon: <MdOutlineDashboard />, path: "/Dashboard" },
        { name: "Products", icon: <MdOutlineInventory2 />, path: "/Products" },
        { name: "Customers", icon: <IoPeopleOutline />, path: "/Customers" },
        { name: "Messages", icon: <LuMessageSquareText />, path: "/Messages" },
        { name: "Analytics", icon: <TbBrandGoogleAnalytics />, path: "/Analytics" },
        { name: "Orders", icon: <MdOutlineShoppingCart />, path: "/Orders" },
        { name: "Saved", icon: <FaRegHeart />, path: "/Saved" },
        { name: "Setting", icon: <IoSettingsOutline />, path: "/Setting" },
    ];

    return (
        <>
            <div
                className={`
        hidden md:flex flex-col h-screen  bg-black text-white shadow-lg z-40 transition-all duration-300 
    ${collapsed ? "w-18" : "w-55"}`}
            >
                {/* //////// heading and collapdes ///////// */}
                <div className="p-4 flex items-center justify-between border-b border-gray-700">
                    {!collapsed && <h2 className="text-xl font-bold">Admin Panel</h2>}

                    {/* sidebtn */}
                    <button onClick={() => setCollapsed(!collapsed)} className="text-xl">
                        {collapsed ? <MdChevronRight /> : <MdChevronLeft />}
                    </button>
                </div>

                {/* //////// navlinks ///////// */}
                <nav className="flex-1 flex flex-col p-3 gap-3">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name + 1}
                            to={item.path}
                            className="flex items-center gap-3 hover:bg-red-500 px-3 py-2 rounded transition text-sm"
                        >
                            <span className="text-xl">{item.icon}</span>
                            {!collapsed && <span>{item.name}</span>}
                        </Link>
                    ))}
                </nav>
            </div>


            {/* ///////// conditional rendering ////// responsivess  */}

            <AnimatePresence>
                {isMobileOpen && (
                    <div className="fixed inset-0 z-50 flex md:hidden">
                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-64 bg-black text-white p-4 h-full shadow-lg"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Admin Panel</h2>

                                {/* Cross Button with Hover Animation */}
                                <motion.button
                                    whileHover={{ rotate: 90, scale: 1.2 }}
                                    whileTap={{ rotate: 360, scale: 0.95 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-white text-2xl"
                                >
                                    <RxCross2 />
                                </motion.button>

                            </div>

                            {/* Nav */}
                            <nav className="flex flex-col gap-3">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="flex items-center gap-3 hover:bg-red-500 px-3 py-2 rounded transition text-sm"
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>

                        {/* Overlay (fade effect) */}
                        <motion.div
                            onClick={() => setIsMobileOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 bg-black"
                        />
                    </div>
                )}
            </AnimatePresence>


        </>
    );
};

export default Sidebar;
