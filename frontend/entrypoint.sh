#!/bin/sh

# Reemplazar el archivo JS con variables reales de entorno
cat <<EOF > /usr/share/nginx/html/config.js
window.env = {
  VITE_BACKEND_URL: "$VITE_BACKEND_URL"
};
EOF

# Iniciar nginx
nginx -g "daemon off;"
