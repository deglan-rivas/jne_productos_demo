#!/bin/sh

# Crear o sobrescribir el archivo config.js con variables de entorno
cat <<EOF > /app/public/config.js
window.env = {
  VITE_BACKEND_URL: "$VITE_BACKEND_URL"
};
EOF

# Iniciar la aplicación en modo desarrollo
npm run dev
