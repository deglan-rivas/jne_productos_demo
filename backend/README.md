# Proyecto de Gestión de Inventario con FastAPI

Este es un proyecto de ejemplo para crear una API REST que gestiona un inventario de productos usando **FastAPI** y **MongoDB**.

## Requisitos

- Python 3.8+
- Docker (para levantar MongoDB)

## Instrucciones

### 1. Crear el entorno virtual

```bash
python -m venv venv
source venv/bin/activate  # Para Linux/Mac
venv\Scripts\activate  # Para Windows
````

### 2. Instalar dependencias

Instala las dependencias desde el archivo `requirements.txt`:

```bash
pip install -r requirements.txt
```

### 3. Levantar MongoDB con Docker

Levanta MongoDB usando Docker Compose:

```bash
docker-compose up -d
```

### 4. Levantar el servidor FastAPI

Corre el servidor FastAPI con Uvicorn:

```bash
uvicorn app.main:app --reload
```

Esto levantará el servidor en `http://localhost:8000`.

### 5. Probar los endpoints

Puedes probar los siguientes endpoints:

* **GET /productos/**: Obtener todos los productos.
* **POST /productos/**: Crear un nuevo producto (requiere un JSON con los detalles).
* **GET /productos/{producto\_id}**: Obtener los detalles de un producto específico.
* **PUT /productos/{producto\_id}**: Actualizar un producto.
* **DELETE /productos/{producto\_id}**: Eliminar un producto.
* **GET /productos/{producto\_id}/calculo**: Obtener el precio final y la disponibilidad de un producto.

Puedes usar herramientas como **Postman** o **curl** para realizar las pruebas.

### 6. Detener y eliminar los contenedores

Una vez que hayas terminado de probar, puedes detener y eliminar los contenedores de Docker con:

```bash
docker compose down
docker volume prune
```

Este comando detendrá y eliminará los contenedores y volúmenes asociados.
