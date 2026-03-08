import React, { useState } from "react";
import LogoAP from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 py-4 font-work">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={LogoAP} alt="logo" className="w-10 h-10" />
            <span className="text-lg font-semibold">Ada Psychiatry</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            <li>
              <Link className="flex items-center gap-1" to="/who-we-are">
                Who we are <IoIosArrowDown />
              </Link>
            </li>

            <li>
              <Link className="flex items-center gap-1" to="/who-we-treat">
                Who we treat <IoIosArrowDown />
              </Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link className="flex items-center gap-1" to="/resources">
                Resources <IoIosArrowDown />
              </Link>
            </li>
          </ul>

          <button
            className="px-6 py-2 rounded-full text-black font-medium 
          bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)]"
          >
            Book an Appointment
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={22} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4">
          <Link to="/who-we-are">Who we are</Link>
          <Link to="/who-we-treat">Who we treat</Link>
          <Link to="/services">Services</Link>
          <Link to="/resources">Resources</Link>

          <button
            className="w-fit px-6 py-2 rounded-full text-black font-medium 
          bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)]"
          >
            Book an Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
