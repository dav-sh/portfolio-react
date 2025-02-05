import { z } from "zod";

export const getContactSchema = (language) => {
  const messages = {
    en: {
      name: "Name is required",
      email: "Enter a valid email",
      subject: "Subject is required",
      message: "Message is required",
    },
    es: {
      name: "El nombre es obligatorio",
      email: "Ingrese un correo válido",
      subject: "El asunto es obligatorio",
      message: "El mensaje es obligatorio",
    },
  };

  return z.object({
    name: z.string().min(1, messages[language].name),
    email: z.string().email(messages[language].email),
    subject: z.string().min(1, messages[language].subject),
    message: z.string().min(1, messages[language].message),
  });
};
