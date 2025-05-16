from datetime import datetime, timedelta
from pydantic import Field
from typing import Literal
from .base import ProductoBase

class ProductoElectronico(ProductoBase):
    tipo: Literal["electronico"]
    garantia_meses: int = Field(..., ge=6)
    fecha_fabricacion: datetime

    @property
    def precio_final(self):
        return round(self.precio_base * 1.18, 2)

    @property
    def disponible(self):
        return self.stock > 0 and self.fecha_fabricacion >= datetime.now() - timedelta(days=365)
