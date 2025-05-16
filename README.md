

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



### **Versión Local**
1. Ejecuta los siguientes comandos para *Linux*. Previamente debes haber instalado *Docker*

```bash
# Ubícate en tu Escritorio
cd ~/Escritorio

# Clona este repositorio
git clone https://github.com/deglan-rivas/jne_productos_demo.git ; cd jne_productos_demo/

# Inicializa los contenedores:
docker compose up -d
```

2. Abre [**http://localhost:5173**](http://localhost:5173/) en tu navegador para ver el resultado 🚀

3. Una vez terminada la prueba. Elimina las carpetas
```bash
# Detén los contenedores:
docker compose down

# Elimina la carpeta usada manualmente o usando la terminal:
cd ~/Escritorio ; rm -rf jne_productos_demo
```