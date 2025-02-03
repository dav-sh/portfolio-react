import React from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/Language";

function ProjectCard({ img, title, desc }) {
  const {language} = useLanguage()

  const text = {
    en: {
      button_git: "Github"
    },
    es: {
      button_git: "Github"
    }
  }
  return (
    <div className="max-w-sm mx-auto border-2 border-blue-400 rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt={`Project: ${title}`}
      />

      <div className="p-4">
        <h2 className="text-2xl font-semibold text-center text-blue-800">{title}</h2>
        <p className="text-gray-700 text-center my-2">{desc}</p>
        <button className="w-full bg-blue-800 text-white font-semibold cursor-pointer hover:bg-blue-500 rounded-2xl px-4 py-2 transition-all duration-300">
          {text[language].button_git}
        </button>
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
