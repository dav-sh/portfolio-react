import { useLanguage } from "../context/Language";



const Footer = () => {
  const {language} = useLanguage();

  const text = {
    en: {
      message: "David Orozco. All rights reserverd.",
      contact: "Contact",
    },
    es: {
      message: "David Orozco. Todos los derechos reservados.",
      contact: "Contacto",
    },
  };

    return (
      <footer className="bg-blue-900 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} {text[language].message}</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              LinkedIn
            </a>
            <a href="mailto:tucorreo@example.com" className="hover:text-blue-300 transition">
              {text[language].contact}
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  