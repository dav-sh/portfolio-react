import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/Language";
import {socialMedia} from '../data/socialLinks'
import me from '../assets/img/me.png'
function About() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Hi, I'm David",
      subtitle: "Web Developer",
      desc: `I am a junior web developer with experience in backend and frontend projects. 
      I have worked on building APIs, managing databases, and developing web applications. 
      I enjoy learning new technologies and improving my skills to create efficient and functional solutions.`,
      button_cv: "Download CV",
    },
    es: {
      title: "Hola, soy David",
      subtitle: "Desarrollador Web",
      desc: `Soy un desarrollador web junior con experiencia en proyectos de backend y frontend. 
      He trabajado en la creación de APIs, gestión de bases de datos y desarrollo de aplicaciones web. 
      Me gusta aprender nuevas tecnologías y mejorar mis habilidades para crear soluciones eficientes y funcionales.`,
      button_cv: "Descargar CV",
    },
  };

  return (
    <div
      id="about"
      className="md:h-screen m-auto p-4 md:p-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center  scroll-mt-18"
    >
      {/* Sección de la imagen y enlaces */}
      <div className="grid gap-3 text-center">
        <img
          src={me}
          alt="Dog"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto border-4 border-white shadow-lg"
        />

        {/* Enlaces sociales */}
        <ul className="flex flex-row justify-center gap-4 text-2xl">
          <li>
            <a
              href={socialMedia.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href={socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${socialMedia.email}`}
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
          <h1 className="text-4xl md:text-6xl font-bold">
            {text[language].title}
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-300">
            {text[language].subtitle}
          </p>
        </div>
        <hr className="my-4 border-t-2 border-white opacity-50" />
        <div>
          <p className="text-sm md:text-base text-gray-200">
            {text[language].desc}
          </p>
          <br />
          <a
            href={
              language === "es"
                ? "/David_Orozco_cv_es.pdf"
                : "/David_Orozco_cv_en.pdf"
            }
            download="David_Orozco_cv.pdf"
          >
            <button className="bg-white text-blue-900 font-semibold cursor-pointer hover:bg-gray-200 rounded-2xl px-4 py-2 transition-all duration-300 shadow-md">
              {text[language].button_cv}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
