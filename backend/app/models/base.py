from pydantic import BaseModel
from typing import Literal

class ProductoBase(BaseModel):
    nombre: str
    tipo: Literal["ropa", "electronico", "alimento"]
    precio_base: float
    stock: int
