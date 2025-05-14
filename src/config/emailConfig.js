// Configuración para EmailJS
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_99g83ut",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_2xnxltu",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

  // Credenciales para el servicio de Gmail
  SMTP_USER: import.meta.env.VITE_SMTP_USER,
};
