import Dropdown from "./Dropdown"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthorized } from "../utils/auth";



const Navbar = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredSubIndex, setHoveredSubIndex] = useState(null);


  const menu = [
    {
      title: "HOME",
      defaultPath: "/home1",
      items: [
        { title: "Home 1", path: "/home1" },
        { title: "Home 2", path: "/home2" },
        { title: "Home 3", path: "/home3" },
        { title: "Home 4", path: "/home4" },
        { title: "Home 5", path: "/home5" },
        { title: "Home 6", path: "/home6" },
        { title: "Home 7", path: "/home7" },
        { title: "Home 8", path: "/home8" },
      ],
    },

    {
      title: "SHOP",
      defaultPath: "/products",
      items: [
        {
          title: "Shop Pages",
          path: "/shopPages",
          children: [
            { title: "Audio & Home", path: "/shopPages/audio-home" },
            { title: "Home & Garden", path: "/shopPages/home-garden" },
            { title: "SmartPhone & iPad", path: "/shopPages/smartphone-ipad" },
            { title: "Video & Game", path: "/shopPages/video-game" },
          ],
        },
        {
          title: "Product Pages",
          path: "/productPages",
          children: [
            { title: "My Account", path: "/productPages/my-account" },
            { title: "Contact Us", path: "/productPages/contact-us" },
            { title: "About Us", path: "/productPages/about-us" },
          ],
        },
        {
          title: "Cart Pages",
          path: "/cartPages",
          children: [
            { title: "Cart Modal", path: "/cartPages/modal" },
            { title: "Cart Drawer", path: "/cartPages/drawer" },
            { title: "Cart Page", path: "/cartPages/page" },
          ],
        },
        {
          title: "Other Pages",
          path: "/otherPages",
          children: [
            { title: "About Page", path: "/otherPages/about" },
            { title: "Contact Page", path: "/otherPages/contact" },
            { title: "FAQs Page", path: "/otherPages/faqs" },
            { title: "Search Page", path: "/otherPages/search" },
            { title: "Country Page", path: "/otherPages/country" },
          ],
        },
        {
          title: "Filter Layout",
          path: "/filterLayout",
          children: [
            { title: "Filter Default", path: "/filterLayout/default" },
            { title: "Filter Sidebar", path: "/filterLayout/sidebar" },
            { title: "Filter Modal", path: "/filterLayout/modal" },
            { title: "Filter Canvas", path: "/filterLayout/canvas" },
          ],
        },
        {
          title: "Product Styles",
          path: "/productStyles",
          children: [
            { title: "Product Simple", path: "/productStyles/simple" },
            { title: "Product Variants", path: "/productStyles/variants" },
            { title: "Out Of Stock", path: "/productStyles/out-of-stock" },
          ],
        },
      ],
    },

    {
      title: "PAGES",
      defaultPath: "/privacy-policy",
      items: [
          { title: "Privacy Policy ", path: "/privacy-policy" },
        { title: "Refund Policy ", path: "/refund-policy" },
        { title: "Terms of Service ", path: "/terms-of-services" },
        { title: "FAQs             ", path: "/faqs" },
      ],
    },
  ];



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

      <nav className="">

        {/* First nav  */}
        <div className="max-w-screen-xl bg-black text-white  border border-white  px-3 p-0 flex flex-wrap items-center mx-auto  justify-between hide ">

          <div>
            <div className="hidden  md:flex items-center space-x-3 rtl:space-x-reverse">
              <span className="hover:text-red-500"> Email: <b> email@email.com </b></span>
              <span className="p-5">|</span>
              <span className="hover:text-red-500 "> Today’s Deal: <b> Sale Off 50% </b></span>
            </div>
          </div>


          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="hidden md:flex hover:text-red-500  items-center space-x-3 rtl:space-x-reverse">
              Order Tracking
            </div>
            <span className="p-lg-5 p-2 hidden md:flex items-center">|</span>

            <div>
              <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="text-white  hover:text-red-500 focus:ring-4 focus:outline-none focus:hidden  rounded-lg  ps-5 m-1 py-2.5 text-center inline-flex items-center " type="button">Currency

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m7 10l5 5l5-5z" strokeWidth="0.2" stroke="white" />
                </svg>
              </button>

              {/* <!-- Dropdown menu --> */}
              <div id="multi-dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                  <li>
                    <a href="#" className=" px-1 py-2 flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USD</a>
                  </li>

                  <li>
                    <a href="#" className=" px-1 py-2 flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">EUR</a>
                  </li>
                  <li>
                    <a href="#" className=" px-1 py-2 flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">GBP</a>
                  </li>
                </ul>
              </div>

            </div>

            <span className="p-lg-5 p-2">|</span>
            <div>

              <button id="multiLevelDropdownButton2" data-dropdown-toggle="multi-dropdown2" className="text-white  hover:text-red-500 focus:ring-4 focus:outline-none focus:hidden rounded-lg  p-1 m-1 py-2.5 text-center inline-flex items-center " type="button">Language
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m7 10l5 5l5-5z" strokeWidth="0.2" stroke="white" />
                </svg>
              </button>

              {/* <!-- Dropdown menu --> */}
              <div id="multi-dropdown2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                  <li>
                    <a href="#" className=" px-1 py-2 flex justify-center items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span></span><img src="/eng.png" className="img-fluid" alt="img" /><span>English</span></a>
                  </li>

                  <li>
                    <a href="#" className=" px-1 py-2 flex justify-center items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span></span><img src="/fra.jpg" className="img-fluid" alt="img" /><span>France</span></a>
                  </li>
                  <li>
                    <a href="#" className=" px-1 py-2 flex justify-center items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span></span><img src="/arab.jpg" className="img-fluid" alt="img" /><span>Arabic</span></a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>


        {/* Second nav  */}
        <div className="max-w-screen-xl  bg-white flex flex-wrap items-center  justify-between mt-5 pt-5 mx-auto lg:p-1">

          {/* logo*/}
          <div className="flex  justify-center items-center mx-auto">
            <a href="/" className="flex justify-center mx-auto items-center lg:space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="lg:h-8 h-10 mx-auto img-fluid" alt="Flowbite Logo" />
            </a>
          </div>

          <div className="flex flex-wrap  justify-center items-center mx-auto">

            {/* search input */}
            <form className="mx-auto  lg:w-[550px] w-full">
              <div className="flex mt-3 mb-3 border border-gray-300 dark:border-gray-600 relative">
                {/* Dropdown Toggle */}
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="hidden lg:flex shrink-0 z-10 items-center py-2.5 px-4 text-sm font-medium text-center"
                >
                  Blogs
                  <svg className="w-2.5 h-2.5 ms-2.5" fill="black" viewBox="0 0 10 6">
                    <path d="m1 1 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 z-10 bg-white  divide-y divide-gray-100 rounded-lg shadow-sm w-44 "
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {["Mockups", "Templates", "Design", "Logos"].map((item, i) => (
                        <li key={i}>
                          <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Separator */}
                <span className="hidden lg:flex  justify-center items-center me-4">|</span>

                {/* Search Input */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative "
                >
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="block p-2.5  w-[500px] searchinput  text-sm text-black   bg-transparent border-none focus:ring-red-500"
                    placeholder="Search Our Store . . ."
                    required
                  />

                  {searchText && isFocused ? (
                    <motion.button
                      type="button"
                      onClick={() => setSearchText("")}
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 end-0 p-2.5"
                    >
                      {/* Close Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </motion.button>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="absolute top-0 end-0 p-2.5 pointer-events-none"
                    >
                      {/* Search Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                        <path fill="#000" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                      </svg>
                    </motion.span>
                  )}
                </motion.div>
              </div>
            </form>
          </div >


          <div className="lg:flex  hidden lg:me-5 space-x-3 rtl:space-x-reverse">
            {/* user icon */}
            <div className="cursor-pointer" onClick={() => { isAuthorized ? navigate("/dashboard") : navigate("/auth") }} >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000"
                d="M7.75 7.5a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0M12 4.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-4 10A2.25 2.25 0 0 0 5.75 17v1.188c0 .018.013.034.031.037c4.119.672 8.32.672 12.438 0a.04.04 0 0 0 .031-.037V17A2.25 2.25 0 0 0 16 14.75h-.34a.3.3 0 0 0-.079.012l-.865.283a8.75 8.75 0 0 1-5.432 0l-.866-.283a.3.3 0 0 0-.077-.012zM4.25 17A3.75 3.75 0 0 1 8 13.25h.34q.28.001.544.086l.866.283a7.25 7.25 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0 1 19.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.1 40.1 0 0 1-12.92 0a1.54 1.54 0 0 1-1.29-1.517z"
                stroke="#000" />
              </svg>
            </div>

            {/* cart icon */}
            <div className="relative">
              <span className="bg-red-500 text-white px-1 -top-2 ml-5 absolute  overflow-hidden rounded-xl">0</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#000"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8.5-3h9.25L19 7H7.312" />
              </svg>
            </div>
          </div >
        </div >



        {/* third nav pages & categories  */}
        < div className="max-w-screen-xl lg:mt-10  relative flex lg:flex-row  flex-col gap-5 lg:gap-5 mb-5 items-center  justify-center mx-auto " >

          {/* dropdown-menu */}
          < div className="max-w-screen-xl border border-white lg:w-[25%]  navfull" >
            <Dropdown />
          </div >


          <div className="lg:w-[75%]  border border-white navfull">

            <nav className="">
              <div className="flex flex-wrap justify-between items-center bg-black">

                <div className="bg-black">
                  <ul className="flex flex-wrap justify-center  items-center mx-auto gap-10 bg-black text-white text-sm font-medium py-2 px-2">

                    {menu.map((menuItem, i) => (
                      <li key={i} className="relative flex items-center gap-1">
                        {/* Clickable Title */}
                        <NavLink
                          to={menuItem.defaultPath}
                          className="hover:text-red-500 ms-1 font-medium transition"
                        >
                          {menuItem.title}
                        </NavLink>

                        {/* Dropdown Toggle via SVG */}
                        <button
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="hover:text-red-500 transition"
                        >
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 6">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {/* Dropdown */}
                        {/* Top-Level Dropdown */}
                        <AnimatePresence>
                          {openIndex === i && (
                            <motion.ul
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={containerVariants}
                              className="absolute top-full mt-4 w-max bg-white shadow-lg  z-50"
                            >
                              {menuItem.items.map((subItem, j) => (
                                <motion.li
                                  key={j}
                                  variants={itemVariants}
                                  onMouseEnter={() => setHoveredSubIndex(j)}
                                  onMouseLeave={() => setHoveredSubIndex(null)}
                                  className="relative px-6 py-2 text-gray-700 group"
                                >
                                  <div className="flex justify-between items-center">
                                    <NavLink to={subItem.path} className="hover:text-red-500">
                                      {subItem.title}
                                    </NavLink>

                                    {/* Nested Trigger if children exist */}
                                    {subItem.children && (
                                      <svg
                                        className="w-2.5 h-2.5 ml-2 text-gray-400 group-hover:text-red-500 transition"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m1 1 4 4-4 4"
                                        />
                                      </svg>
                                    )}
                                  </div>

                                  {/* 🌱 Nested Dropdown */}
                                  {hoveredSubIndex === j && subItem.children && (
                                    <motion.ul
                                      initial="closed"
                                      animate="open"
                                      exit="closed"
                                      variants={containerVariants}
                                      className="absolute left-full top-0 w-max min-w-[160px] bg-white shadow-md z-50"
                                    >
                                      {subItem.children.map((childItem, k) => (
                                        <motion.li
                                          key={k}
                                          variants={itemVariants}
                                          className="px-4 py-2 text-gray-700 whitespace-nowrap"
                                        >
                                          <NavLink to={childItem.path} className="block hover:text-red-500">
                                            {childItem.title}
                                          </NavLink>
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>

                      </li>
                    ))}

                    {/* Static tabs (optional routing later) */}
                    <li
                      className=" py-1 text-white "
                    >
                      <NavLink to="/collection" className="block hover:text-red-500">
                        COLLECTION
                      </NavLink>
                    </li>
                    <li
                      className=" py-1 text-white "
                    >
                      <NavLink to="/blogs" className="block hover:text-red-500">
                        BLOGS
                      </NavLink>
                    </li>
                    <li
                      className=" py-1 text-white "
                    >
                      <NavLink to="/section" className="block hover:text-red-500">
                        SECTION
                      </NavLink>
                    </li>
                  </ul>

                </div>

                <div className="hidden hide lg:flex gap-3 justify-center items-center lg:me-0 text-white font-bold px-3 w-[170px] h-[52px] bg-red-500 py-4">
                  <img src="/freeshipping.png" alt="Free Shipping" width={25} className="rounded-lg" />
                  <span>Free Shipping</span>
                </div>
              </div>
            </nav>



          </div>


        </div >

      </nav >

    </>
  )
}

export default Navbar