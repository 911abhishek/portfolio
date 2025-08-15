import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import {motion} from "motion/react"
function Navigation(){
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="/" className="nav-Link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-Link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#work" className="nav-Link">
          Work
        </a>
      </li>
      <li className="nav-li"> 
        <a href="#contact" className="nav-Link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl mt-2">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Portfolio
          </a>

          <button
            onClick={() => {
              setisOpen(!isOpen);
            }}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden "
          >
            {isOpen ? (
              <RxCross2 className="w-6 h-6 font-bold" />
            ) : (
              <TiThMenu className="w-6 h-6" />
            )}
          </button>
          <nav className="hidden sm:flex">{Navigation()}</nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar