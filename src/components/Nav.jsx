import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useLanguage } from "../context/Language";
import logo from '../assets/img/logo.png'
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const text = {
    en: {
      nav: ["About", "Projects", "Stack", "Contact",],
    },
    es: {
      nav: ["Acerca", "Proyectos", "Tecnologías ", "Contacto",],
    },
  };

  return (
    <div className="sticky top-0 w-full bg-blue-500 p-4 shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        {/* <h1 className="text-3xl font-bold text-center text-white">LOGO</h1> */}
        <img src={logo} alt="LOGO" className="h-10" />

        {/* Navigation - Desktop */}
        <ul className={`hidden md:flex  ${language === "es" ? "space-x-8" : "space-x-15"} text-2xl`}>
          {console.log({ language })}
          {text[language].nav.map((item, index) => (
            <li key={index} className="text-white hover:text-amber-300">
              <a href="#">{item}</a>
            </li>
          ))}

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={toggleLanguage}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              ES / EN
            </span>
          </label>
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
            {text[language].nav.map((value, index) => (
              <li
                key={index}
                className="hover:text-amber-300 active:bg-blue-400 p-4  rounded-lg"
              >
                <a href="#">{value}</a>
              </li>
            ))}

            <label className="py-4 inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={toggleLanguage}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                ES / EN
              </span>
            </label>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
