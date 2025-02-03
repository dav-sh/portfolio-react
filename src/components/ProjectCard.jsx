import React from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/Language";

function ProjectCard({ img, title, desc, link }) {
  const { language } = useLanguage();

  const text = {
    en: {
      button_git: "Github",
    },
    es: {
      button_git: "Github",
    },
  };
  return (
    <div className="max-w-md mx-auto border-2 border-blue-400 rounded-lg shadow-lg overflow-hidden flex flex-col md:h-auto ">
      <img
        className="w-full h-32 md:h-48 object-cover"
        src={img}
        alt={`Project: ${title}`}
      />

      <div className="flex flex-col p-4 flex-grow">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-800">
          {title}
        </h2>
        <p className="text-sm md:text-auto text-gray-700 text-center my-2 flex-grow">{desc}</p>
        <div className="mt-4">
          <a href={`${link}`} target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-blue-800 text-white font-semibold cursor-pointer hover:bg-blue-500 rounded-2xl px-4 py-2 transition-all duration-300">
              {text[language].button_git}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProjectCard;
