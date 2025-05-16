import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

# Obtener la URI de conexión
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27019")

# Conectar a MongoDB
client = MongoClient(MONGO_URI)
db = client["inventario"]
coleccion_productos = db["productos"]
