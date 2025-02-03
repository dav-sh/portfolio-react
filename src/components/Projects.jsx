import React from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/Language";

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

  const projects = [
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: {
        en: "API with Node.js and JWT",
        es: "API con Node.js y JWT",
      },
      desc: {
        en: "Developed a RESTful API using Node.js and Express with JWT authentication. The project uses SQL Server as the database and Postman for testing the routes. It was a great learning experience for building secure APIs and handling databases.",
        es: "Desarrollé una API RESTful usando Node.js y Express con autenticación JWT. El proyecto utiliza SQL Server como base de datos y Postman para probar las rutas. Fue una excelente experiencia de aprendizaje para crear APIs seguras y manejar bases de datos.",
      },
      link: "https://github.com/yourusername/api-project",
    },
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: {
        en: "Chinese Checkers Game in Java",
        es: "Juego de Damas Chinas en Java",
      },
      desc: {
        en: "Built a console-based Chinese Checkers game in Java. It implements the game logic and allows players to make moves on the board. Although still a work in progress, it was a solid exercise in object-oriented programming and Java.",
        es: "Construí un juego de Damas Chinas basado en consola en Java. Implementa la lógica del juego y permite a los jugadores realizar movimientos en el tablero. Aunque aún está en progreso, fue un buen ejercicio de programación orientada a objetos y Java.",
      },
      link: "https://github.com/yourusername/chinese-checkers-game",
    },
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: {
        en: "Online Store in Java with MySQL",
        es: "Tienda Online en Java con MySQL",
      },
      desc: {
        en: "Created a basic online store in Java with MySQL as the database. It includes product management and a basic shopping system. While still unfinished, it was an excellent project for learning about database integration in Java applications.",
        es: "Creé una tienda online básica en Java con MySQL como base de datos. Incluye gestión de productos y un sistema de compras básico. Aunque está sin terminar, fue un excelente proyecto para aprender sobre la integración de bases de datos en aplicaciones Java.",
      },
      link: "https://github.com/yourusername/online-store-java",
    },
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: {
        en: "Online Store in React (Coming Soon)",
        es: "Tienda Online en React (Próximamente)",
      },
      desc: {
        en: "Currently working on a React-based online store, improving the user experience with modern front-end technologies. This project is an evolution of the previous Java-based store and aims to deliver a better, more dynamic interface.",
        es: "Actualmente trabajando en una tienda online basada en React, mejorando la experiencia de usuario con tecnologías frontend modernas. Este proyecto es una evolución de la tienda basada en Java y tiene como objetivo ofrecer una interfaz más dinámica y moderna.",
      },
      link: "https://github.com/yourusername/online-store-react",
    },
    {
      img: "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg",
      title: {
        en: "Django Projects (Tutorials)",
        es: "Proyectos en Django (Tutoriales)",
      },
      desc: {
        en: "Completed several Django tutorials, including a blog and task management system. These projects allowed me to get familiar with Django and its database integration, helping me get a solid understanding of web development with Python.",
        es: "Completé varios tutoriales de Django, incluyendo un blog y un sistema de gestión de tareas. Estos proyectos me permitieron familiarizarme con Django y su integración con bases de datos, ayudándome a obtener una comprensión sólida del desarrollo web con Python.",
      },
      link: "https://github.com/yourusername/django-projects",
    },
  ];

  return (
    <div className="bg-white text-black p-8 md:p-20">
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
