import Dropdown from "./Dropdown"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "../utils/auth";



const Navbar = () => {
const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);


  const menu = [
    { title: "HOME", items: ["Dashboard", "Settings"] },
    { title: "SHOP", items: ["Products", "Cart"] },
    { title: "PAGES", items: ["PrivacyPolicy", "RefundPolicy", "TermsOfService", "FAQS", "About Us", "Contact"] },
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
        <div className="max-w-screen-xl bg-[#EFEFEF] border-gray-200  dark:bg-gray-900 px-3 p-0 flex flex-wrap items-center mx-auto  justify-between hide ">
          <div>
            <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
              <span> Email: <b> email@email.com </b></span>
              <span className="p-5">|</span>
              <span> Today’s Deal: <b> Sale Off 50% </b></span>
            </div>
          </div>


          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
              Order Tracking
            </div>
            <span className="p-lg-5 p-2 hidden md:flex items-center">|</span>

            <div>
              <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="text-black  hover:text-red-500 focus:ring-4 focus:outline-none focus:hidden  rounded-lg  ps-5 m-1 py-2.5 text-center inline-flex items-center " type="button">Currency<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m7 10l5 5l5-5z" stroke-width="0.2" stroke="#000" /></svg>
              </button>

              {/* <!-- Dropdown menu --> */}
              <div id="multi-dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
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

              <button id="multiLevelDropdownButton2" data-dropdown-toggle="multi-dropdown2" className="text-black  hover:text-red-500 focus:ring-4 focus:outline-none focus:hidden rounded-lg  p-1 m-1 py-2.5 text-center inline-flex items-center " type="button">Language <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m7 10l5 5l5-5z" stroke-width="0.2" stroke="#000" /></svg>
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
        <div className="max-w-screen-xl bg-white flex flex-wrap items-center justify-between mt-5 pt-5 mx-auto p-4">

          {/* logo*/}
          <a href="https://flowbite.com/" className="flex justify-center mx-auto items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="lg:h-8  img-fluid" alt="Flowbite Logo" />
          </a>

          <form className=" mx-auto w-100 ">
            <div className=" flex mt-3 mb-3  border border-gray-300   dark:border-gray-600">
              <label className="mb-2 text-sm font-medium  text-white sr-only dark:text-white">Your Email</label>
              <button id="dropdown-button" data-dropdown-toggle="dropdown" className="hidden lg:flex shrink-0 z-10  items-center py-2.5 px-4 text-sm font-medium text-center   " type="button">Blogs <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
              </button>

              <div id="dropdown" className="z-10 hidden bg-white  divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                  </li>
                </ul>
              </div>

              <span className="hidden lg:flex justify-center items-center me-4">|</span>

              {/* search input */}
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm focus:ring-red-500 border-0  text-white    " placeholder="Search Our Store . . . " required />
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full focus:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" stroke-width="0.2" stroke="#000" /></svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>


          <div className="lg:flex  hidden space-x-3 rtl:space-x-reverse">
            
            {/* user icon */}
            <div className="cursor-pointer" onClick={()=>{isAuthorized ? navigate("/dashboard") : navigate("/auth")}} >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000"
                d="M7.75 7.5a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0M12 4.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-4 10A2.25 2.25 0 0 0 5.75 17v1.188c0 .018.013.034.031.037c4.119.672 8.32.672 12.438 0a.04.04 0 0 0 .031-.037V17A2.25 2.25 0 0 0 16 14.75h-.34a.3.3 0 0 0-.079.012l-.865.283a8.75 8.75 0 0 1-5.432 0l-.866-.283a.3.3 0 0 0-.077-.012zM4.25 17A3.75 3.75 0 0 1 8 13.25h.34q.28.001.544.086l.866.283a7.25 7.25 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0 1 19.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.1 40.1 0 0 1-12.92 0a1.54 1.54 0 0 1-1.29-1.517z"
                stroke="#000" />
              </svg>
            </div>

            {/* cart icon */}
            <div className="relative">
              <span className="bg-red-500 text-white px-1 -top-2 ml-5 absolute  overflow-hidden rounded-xl">0</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#000"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8.5-3h9.25L19 7H7.312" /></svg>
            </div>
          </div>

        </div>


        {/* third nav pages & categories  */}
        <div className="max-w-screen-xl relative flex flex-wrap  gap-5 mb-5 items-center  justify-center mx-auto ">

          {/* dropdown-menu */}
          <div className="max-w-screen-xl lg:w-[20%] navfull" >
            <Dropdown />
          </div>

          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;

          <div className="lg:w-[73%] bg-red-100 navfull">

            <nav className="">

              {/* pages tabs */}
              <div className="flex flex-wrap  justify-between  items-center bg-black">
                <div className="bg-black">
                  <ul className="flex flex-wrap justify-center item-center gap-10 bg-black  text-white text-sm font-medium py-4 px-5" >
                    {menu.map((menuItem, i) => (
                      <li
                        key={i}
                        className="relative group"
                        onMouseEnter={() => setOpenIndex(i)}
                        onMouseLeave={() => setOpenIndex(null)}
                      >
                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                          {menuItem.title}
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {openIndex === i && (
                            <motion.ul
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={containerVariants}
                              className="absolute top-full mt-4 w-[130px] bg-white shadow rounded z-50"
                            >
                              {menuItem.items.map((subItem, j) => (
                                <motion.li
                                  key={j}
                                  variants={itemVariants}
                                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                >
                                  {subItem}
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}

                    <li>
                      <a href="#" className="hover:text-red-500 transition">COLLECTIONS</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-500 transition">BLOGS</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-500 transition">SECTIONS</a>
                    </li>
                  </ul>
                </div>


                {/* freeshipping */}
                <div className="hidden hide lg:flex gap-3 justify-center items-center lg:me-0  text-white font-bold px-3 w-[170px] h-[52px] bg-red-500 py-4 ">
                  <img src="/freeshipping.png" alt="Free Shipping" width={25} className="rounded-lg" />
                  <span>Free Shipping</span>
                </div>
              </div>




            </nav>
          </div>


        </div>

      </nav >
    </>
  )
}

export default Navbar