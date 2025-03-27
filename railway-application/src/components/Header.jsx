import React, { useEffect, useState } from "react";
import railwayIcon from "../images/railway-icon.png";
import {Link,useNavigate } from 'react-router-dom'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === "dark")

  const darkModeHandle = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  useEffect( () => {
    if(darkMode){
      document.body.classList.add('dark')
      localStorage.setItem("theme","dark")
    }
    else{
      document.body.classList.remove('dark')
      localStorage.setItem("theme","light")
    }
  },[darkMode])

  return (
    <div className="max-w-screen">
      {/* NAV BAR STARTS HERE */}
      <nav className="bg-white dark:bg-gray-900 w-screen h-15 shadow-gray-200 shadow-xl hover:shadow-xl hover:shadow-amber-800 flex items-center justify-between px-5 py-3 hover:scale-[1.02] transition-all duration-300 ease-in-out ">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={railwayIcon} alt="railway icon" className="size-10 hover:scale-110 transition-all duration-300 ease-in-out" />
          <p className="font-extrabold font-sans text-2xl bg-gradient-to-bl from-indigo-800 to-orange-700 bg-clip-text text-transparent ml-2 hover:scale-105 transition-all duration-300 ease-in-out">
            bharat rail
          </p>
        </div>

        {/* Desktop Menu (Hidden in Small Screens) */}
        <div className="hidden md:flex gap-10" onClick={ () => (navigate('/'))}>
          <button className="font-bold font-serif text-xl hover:bg-amber-200 hover:scale-110 rounded-2xl transition-all duration-300 ease-in-out transform active:scale-90 hover:border-2 hover:shadow-md hover:shadow-amber-200 px-3 py-1">
          Home
          </button>
          <button className="font-bold font-serif text-xl hover:bg-amber-200 hover:scale-110 rounded-2xl transition-all duration-300 ease-in-out transform active:scale-90 hover:border-2 hover:shadow-md hover:shadow-amber-200 px-3 py-1">
            Contacts
          </button>
        </div>

        {/* Hamburger Button (Visible in Small Screens) */}
        <div className="md:hidden bg-green-400 rounded-md">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">

            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>


        <div className="hidden md:block mr-4 space-x-2">
        <button className="font-bold font-serif text-xl hover:bg-amber-200 hover:scale-110 rounded-2xl transition-all duration-300 ease-in-out transform active:scale-90 hover:border-2 hover:shadow-md hover:shadow-amber-200 px-3 py-1"
        onClick={darkModeHandle}
        >
          {darkMode?'DarkMode🌙' : 'LightMode☀️'}</button>

          <button className="font-bold font-serif text-xl hover:bg-amber-200 hover:scale-110 rounded-2xl transition-all duration-300 ease-in-out transform active:scale-90 hover:border-2 hover:shadow-md hover:shadow-amber-200 px-3 py-1">
            Sign In
          </button>
        </div>
     

      </nav>

      {/* Sliding Sidebar Menu (Mobile) */}
      <div className={`fixed top-0 right-0 h-screen w-48 bg-gray-700 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white text-xl">
          ✖
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-start mt-16 space-y-6 pl-6">
          <Link to='/' ><button className="text-white font-bold text-xl hover:text-amber-300 hover:cursor-pointer"
          onClick={() => setIsOpen(false)}>Home</button></Link>
          <button className="text-white font-bold text-xl hover:text-amber-300">Contacts</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
