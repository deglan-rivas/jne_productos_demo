from typing import Union
from pydantic import BaseModel
from app.models.ropa import ProductoRopa
from app.models.electronico import ProductoElectronico
from app.models.alimento import ProductoAlimento

ProductoUnion = Union[ProductoRopa, ProductoElectronico, ProductoAlimento]
