

<div align="center">
  <!-- <img src="logo.png" height="90px" width="auto" />  -->
  <h2>Gestor de Productos - JNE</h2>
  <p>
    Aplicación para gestionar ropa, alimentos y productos electrónicos de la JNE
  </p>
  <!-- <img src="portada.png"></img> -->
</div>


## 🛠️ Stack

- [**React - ReactRouter**](https://react.dev/) - Frontend
- [**Node - Express**](https://expressjs.com/) - Backend
- [**MongoDB**](https://www.mongodb.com/atlas/database) - Base de datos


## 🚀 Empezar

### **Versión Online**

Temporalmente **NO** se ha desplegado los contenedores a producción



### **Versión Local - localhost**
1. Ejecuta los siguientes comandos para *Linux*. Previamente debes haber instalado *Docker*

```bash
# Ubícate en tu Escritorio
cd ~/Escritorio

# Clona este repositorio
git clone https://github.com/deglan-rivas/jne_productos_demo.git ; cd jne_productos_demo/

# Inicializa los contenedores:
docker compose  -f docker-compose.localhost.yml up -d
```

2. Abre [**http://localhost:5173**](http://localhost:5173/) en tu navegador para ver el resultado 🚀

3. Una vez terminada la prueba. Elimina las carpetas
```bash
# Detén los contenedores:
docker compose -f docker-compose.localhost.yml down

# Elimina la carpeta usada manualmente o usando la terminal:
cd ~/Escritorio ; rm -rf jne_productos_demo
```

### **Versión Local - producción**
1. Ejecuta los siguientes comandos para *Linux*. Previamente debes haber instalado *Docker*

```bash
# Ubícate en tu Escritorio
cd ~/Escritorio

# Clona este repositorio
git clone https://github.com/deglan-rivas/jne_productos_demo.git ; cd jne_productos_demo/

# Inicializa los contenedores:
docker compose  -f docker-compose.prd.yml up -d

# Obtén la IP privada para acceder al contenedor del frontend
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' saas_frontend
# Por ejemplo:
# 172.19.0.4
# o también puede ser
# 172.20.0.4
```

2. En tu navegador abre la ruta obtenida con el comando anterior para ver el resultado 🚀, por ejemplo: [**http://172.19.0.4**](http://172.19.0.4/)

3. Una vez terminada la prueba. Elimina las carpetas
```bash
# Detén los contenedores:
docker compose -f docker-compose.prd.yml down

# Elimina la carpeta usada manualmente o usando la terminal:
cd ~/Escritorio ; rm -rf jne_productos_demo