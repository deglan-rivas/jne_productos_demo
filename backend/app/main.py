from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import productos
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Habilitar CORS
origins = [
    os.getenv("FRONTEND_URL"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,             # Permitir estos orígenes
    allow_credentials=True,
    allow_methods=["*"],               # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],               # Permitir todos los headers
)

app.include_router(productos.router, prefix="/productos", tags=["Productos"])
# print("API de inventario en ejecución...")