import Link from "next/link";
import Img from "next/image";
import { userouter } from "next/router";
import React, { useState } from "react";
const Header = () => {

  const [nav, setNav] = useState(true)

  const [toggle, setToggle] = useState(true)
    
  
  return (
    <div>
      <nav className="bg-amber-400  shadow ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex md:flex items-center justify-between h-16">

            {/* LOGO section */}
            <div className=" flex items-center">
              <Link className="flex-shrink-0" href="/">
                <Img className="w-auto h-auto " src="/logoblack.png" alt="Workflow" width={150} height={20}/>
              </Link>
            </div>

            {/* Menu section */}
            <div className="  hidden md:block ">
              <div className=" flex  space-x-6">
                <Link
                  className=" text-black hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="text-black hover:text-white  dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="text-black  hover:text-white  dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/#"
                >
                  Details
                </Link>
                <Link
                  className="text-black  hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/#"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Profile section */}
            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3">
                  <div className="relative inline-block text-left">
                    <div className="invisible md:visible flex justify-between">
                      {/* login button 
                      <button type ="button" className= "justify-start hover:bg-amber-500 " id = "login/signup">
                        <span className="text-black text-sm font-medium">Login/Signup</span>
                      </button>*/}

                      {/* Profile section */}
                      <button
                        type="button"
                        className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:.options dark:hover:.options focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                        id="options-menu"
                        onClick={()=>{
                          setToggle(!toggle);
                          console.log(toggle);
                        }}
                      >
                        <svg
                          width="20"
                          fill="currentColor"
                          height="20"
                          className="text-gray-800"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 

            
            {/* menu button for menu bar */}
            <div  className={"flex -mr-2 justify-end md:hidden" }>
              <button 
              onClick={() => {
                setNav(!nav);
              }}
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none md:hidden">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>


            
          </div>
        </div>

          {/* menu item in small screen */}
        <div className={nav ? "hidden" : " block  "}>
        <div  className=" w-full absolute z-50 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 w-full bg-bb2 sm:px-3  ">
            <Link
              className="text-gray-300 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Details
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900"
            >
              Profile
            </Link>
            <Link
              href="#"
              className=" block px-3 py-2 rounded-md text-base font-medium text-red-700 hover:bg-gray-100 hover:text-red-700  "
            >
              Logout
            </Link>
          </div>
        </div>
      </div>


      {/* profile option section */}
      <div className={toggle?'hidden':'md:block'}>
      <div
        className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-gray-100 rounded-md shadow-lgring-1 ring-black ring-opacity-5 dark:bg-gray-100 "
        id="options"
      >
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            href="#"
            className=" block px-4 py-2 text-md text-gray-700 hover:bg-bb3 hover:text-gray-100"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Profile</span>
            </span>
          </Link>
          <Link
            href="#"
            className=" block px-4 py-2 text-md text-red-700 hover:bg-red-700 hover:text-gray-100"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Logout</span>
            </span>
          </Link>
        </div>
      </div>
      </div>

      </nav>
    </div>
  );
};

export default Header;



