import api_node from "../assets/img/projects/api_node.png";
import django from "../assets/img/projects/django.png";
import task_app from "../assets/img/projects/task_app.png";
import express_api from "../assets/img/projects/express_api.png";
import portfolio from "../assets/img/projects/portfolio.png";
export const projects = [
  {
    img: api_node,
    title: {
      en: "API with Node.js and JWT",
      es: "API con Node.js y JWT",
    },
    desc: {
      en: "Developed a RESTful API using Node.js and Express with JWT authentication. The project uses SQL Server as the database and Postman for testing the routes. It was a great learning experience for building secure APIs and handling databases.",
      es: "Desarrollé una API RESTful usando Node.js y Express con autenticación JWT. El proyecto utiliza SQL Server como base de datos y Postman para probar las rutas. Fue una excelente experiencia de aprendizaje para crear APIs seguras y manejar bases de datos.",
    },
    link: "https://github.com/dav-sh/api-tienda",
  },

  {
    img: task_app,
    title: {
      en: "React Task List",
      es: "Lista de Tareas en React",
    },
    desc: {
      en: "A simple task list app where you can add and remove tasks. Built with React, no database used for now. It's a straightforward project for learning React fundamentals.",
      es: "Una aplicación simple de lista de tareas donde puedes agregar y eliminar tareas. Construida con React, sin base de datos por ahora. Es un proyecto sencillo para aprender los fundamentos de React.",
    },
    link: "https://github.com/dav-sh/react-list-app",
  },
  {
    img: express_api,
    title: {
      en: "API in Node.js",
      es: "API en Node.js",
    },
    desc: {
      en: "A basic API built with Express and Node.js that performs CRUD operations. This is just an example API and doesn't connect to a database, but it could be extended with a simple database in the future.",
      es: "Una API básica construida con Express y Node.js que realiza operaciones CRUD. Este es solo un ejemplo de API y no se conecta a una base de datos, aunque podría ampliarse con una base de datos simple en el futuro.",
    },
    link: "https://github.com/dav-sh/Ejemplo-api-node-express",
  },
  {
    img: django,
    title: {
      en: "Django Projects",
      es: "Proyectos en Django",
    },
    desc: {
      en: "Completed several Django tutorials, including a Web Store with shopping cart and blog system. This project allowed me to get familiar with Django and its database integration, helping me get a solid understanding of web development with Python.",
      es: "Completé varios tutoriales de Django, incluyendo una Tienda en linea con carro de compras. Este proyecto me permitio familiarizarme con Django y su integración con bases de datos, ayudándome a obtener una comprensión sólida del desarrollo web con Python.",
    },
    link: "https://github.com/dav-sh/projectWeb-django",
  },
  {
    img: portfolio,
    title: {
      en: "My Portfolio",
      es: "Mi Portafolio",
    },
    desc: {
      en: "I built my personal portfolio using React, Tailwind CSS, Node.js, Express, and SMTP for the contact form email functionality. It showcases both front-end and back-end projects, reflecting my full-stack development approach.",
      es: "Construí mi portafolio personal usando React, Tailwind CSS, Node.js, Express y SMTP para la funcionalidad del formulario de contacto. Incluye proyectos tanto de frontend como de backend, reflejando mi enfoque de desarrollo full-stack.",
    },
    link: "https://github.com/dav-sh/portfolio-react",
  },
];
