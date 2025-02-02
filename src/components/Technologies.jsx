import React from "react";
import {
  FaJs,
  FaNodeJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaGithub ,
} from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

function Technologies() {
  const technologies = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3 className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "SQL Server", icon: <DiMsqlServer className="text-red-700" /> },
    { name: "Github", icon: <FaGithub  className="text-black" /> },
  ];

  return (
    <section className="bg-gradient-to-l from-blue-600 to-blue-900 text-white p-8 md:p-20 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-full shadow-md flex flex-col items-center justify-center w-32 h-32"
            >
              <div className="text-4xl">{tech.icon}</div>
              <p className="font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
