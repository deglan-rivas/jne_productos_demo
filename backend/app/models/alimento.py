from datetime import datetime
from .base import ProductoBase
from typing import Literal

class ProductoAlimento(ProductoBase):
    tipo: Literal["alimento"]
    fecha_caducidad: datetime

    @property
    def precio_final(self):
        dias = (self.fecha_caducidad - datetime.now()).days
        return round(self.precio_base * 0.8, 2) if dias < 7 else self.precio_base

    @property
    def disponible(self):
        return self.stock >= 5 and self.fecha_caducidad > datetime.now()
