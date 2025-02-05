import { useState } from "react";
import { useLanguage } from "../context/Language";
const apiUrl = import.meta.env.VITE_API_URL;
function Contact() {
  const {language} = useLanguage();

  const text = {
    en: {
      title: "Get in Touch",
      name: "Your Name",
      email: `Your Email`,
      subject: "Subject",
      message: "Your Message",
      button_send: "Send",
    },
    es: {
      title: "Contáctame",
      name: "Tu Nombre",
      email: "Tu Correo Electrónico",
      subject: "Asunto",
      message: "Tu Mensaje",
      button_send: "Enviar",
    },
  };

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    subject: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    fetch(`${apiUrl}/api/email/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Mensaje enviado", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section id='contact' className="scroll-mt-18 bg-white text-gray-900 py-12">
      <div className="container mx-auto max-w-lg p-8 bg-white rounded-xl shadow-xl border border-blue-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {text[language].title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              {text[language].name}
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              {text[language].email}
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              {text[language].subject}
            </label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              {text[language].message}
            </label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:opacity-90 transition duration-200 shadow-md"
          >
            {text[language].button_send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
