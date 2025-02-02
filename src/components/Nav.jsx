import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil

  return (
    <div className="sticky top-0 w-full bg-blue-500 p-4 shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center text-white">LOGO</h1>

        {/* Navigation - Desktop */}
        <ul className="hidden md:flex space-x-20 text-2xl">
          <li className="text-white hover:text-amber-300">
            <a href="#">About</a>
          </li>
          <li className="text-white hover:text-amber-300">
            <a href="#">Projects</a>
          </li>
          <li className="text-white hover:text-amber-300">
            <a href="#">Contact</a>
          </li>
          <li className="text-white hover:text-amber-300">
            <a href="#">CV</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <RxCross2 className="h-6 w-6" /> // Icono de cerrar
            ) : (
              <GiHamburgerMenu className="h-6 w-6" /> // Icono de menú
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Condicional */}
      {isMenuOpen && (
        <div className="md:hidden p-4">
          <ul className=" text-white text-center text-xl">
            <li className="hover:text-amber-300 active:bg-blue-400 p-4  rounded-lg">
              <a href="#">About</a>
            </li>
            <li className="hover:text-amber-300 active:bg-blue-400 p-4 rounded-lg">
              <a href="#">Projects</a>
            </li>
            <li className="hover:text-amber-300 active:bg-blue-400 p-4 rounded-lg">
              <a href="#">Contact</a>
            </li>
            <li className="hover:text-amber-300 active:bg-blue-400 p-4 rounded-lg">
              <a href="#">CV</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
