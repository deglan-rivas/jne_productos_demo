# Etapa de desarrollo y build
FROM node:22.15.0-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build



# Etapa de producción: sirve los archivos estáticos con NGINX
FROM nginx:1.26-alpine as production

# Copia los archivos estáticos construidos al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Opcional: elimina el archivo de configuración por defecto y usa uno propio
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# FROM busybox:1.30 AS runner
# WORKDIR /app
# COPY --from=builder /app/dist .
# CMD ["busybox", "httpd", "-f", "-v", "-p", "8080"]