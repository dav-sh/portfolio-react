import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: "API",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quo labore quae reiciendis aut magnam sed, placeat dolor et magni, ducimus voluptate! Neque voluptatem asperiores ea. Amet voluptatum totam ratione.",
    },
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: "POS",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quo labore quae reiciendis aut magnam sed, placeat dolor et magni, ducimus voluptate! Neque voluptatem asperiores ea. Amet voluptatum totam ratione.",
    },
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: "Game",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quo labore quae reiciendis aut magnam sed, placeat dolor et magni, ducimus voluptate! Neque voluptatem asperiores ea. Amet voluptatum totam ratione.",
    },
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: "JWT",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quo labore quae reiciendis aut magnam sed, placeat dolor et magni, ducimus voluptate! Neque voluptatem asperiores ea. Amet voluptatum totam ratione.",
    },
  ];

  return (
    <div className="bg-white text-black p-8 md:p-20">
      <h2 className="text-4xl text-center font-bold text-blue-800 mb-8">
        Projects
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
