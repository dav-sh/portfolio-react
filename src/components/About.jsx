import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <div className="h-screen m-auto p-4 md:p-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
      {/* Sección de la imagen y enlaces */}
      <div className="grid gap-3 text-center">
        <img
          src="https://images.dog.ceo/breeds/hound-english/n02089973_2345.jpg"
          alt="Dog"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto border-4 border-white shadow-lg"
        />

        {/* Enlaces sociales */}
        <ul className="flex flex-row justify-center gap-4 text-2xl">
          <li>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:tu-correo@example.com"
              className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>

      {/* Sección de texto */}
      <section className="grid gap-4 md:gap-8 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm David</h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-300">Web Developer</p>
        </div>
        <hr className="my-4 border-t-2 border-white opacity-50" />
        <div>
          <p className="text-sm md:text-base text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            sapiente eligendi corporis, consequuntur, illum officiis id culpa
            quibusdam placeat perspiciatis harum ad aliquid soluta maxime, sit
            amet. Consequuntur, voluptatem recusandae!
          </p>
          <br />
          <button className="bg-white text-blue-900 font-semibold cursor-pointer hover:bg-gray-200 rounded-2xl px-4 py-2 transition-all duration-300 shadow-md">
            Download CV
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
