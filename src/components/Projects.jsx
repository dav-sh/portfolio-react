import React from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/Language";
import {projects} from '../data/projects'
function Projects() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Proyects",
    },
    es: {
      title: "Proyectos",
    },
  };

  return (
    <div id="projects" className="scroll-mt-18 bg-white text-black p-8 md:p-20">
      <h2 className="text-4xl text-center font-bold text-blue-800 mb-8">
        {text[language].title}
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          console.log(project.title[language]);
          return (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title[language]}
              desc={project.desc[language]}
              link={project.link}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
