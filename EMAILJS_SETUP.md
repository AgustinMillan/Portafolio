# Configuración de EmailJS para el Formulario de Contacto

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS siguiendo estos pasos:

## 1. Crear una cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/) y regístrate para obtener una cuenta gratuita
2. Inicia sesión en tu cuenta

## 2. Crear un servicio de Email

1. En el panel de EmailJS, ve a "Email Services" y haz clic en "Add New Service"
2. Selecciona "Gmail" como proveedor
3. Ingresa tus credenciales de Gmail:
   - Email: victor.agustin.millan@gmail.com
   - Contraseña: fuoezjzagdhteajr
4. Nombra el servicio como "service_portfolio" (o el nombre que prefieras)
5. Guarda el servicio

## 3. Crear una plantilla de Email

1. Ve a "Email Templates" y haz clic en "Create New Template"
2. Crea una plantilla con el siguiente contenido:

```
Asunto: {{subject}}

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}
```

3. Nombra la plantilla como "template_portfolio" y guárdala

## 4. Obtener la clave pública de API

1. Ve a "Account" > "API Keys"
2. Copia tu "Public Key"

## 5. Actualizar el archivo .env

1. Abre el archivo `.env` en la raíz del proyecto
2. Actualiza la variable `VITE_EMAILJS_PUBLIC_KEY` con tu clave pública:

```
VITE_EMAILJS_PUBLIC_KEY=tu_clave_publica_aqui
```

3. Si nombraste el servicio o la plantilla de manera diferente, actualiza también:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

## 6. Reiniciar el servidor de desarrollo

Después de realizar estos cambios, reinicia el servidor de desarrollo:

```
npm run dev
```

## Notas importantes

- La cuenta gratuita de EmailJS permite enviar hasta 200 emails por mes
- Asegúrate de no compartir tus credenciales ni tu clave de API públicamente
- Si tienes problemas con la autenticación de Gmail, es posible que necesites habilitar "Acceso de aplicaciones menos seguras" en tu cuenta de Google o usar una contraseña de aplicación
