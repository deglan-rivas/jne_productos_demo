from pydantic import Field
from typing import Literal
from .base import ProductoBase

class ProductoRopa(ProductoBase):
    tipo: Literal["ropa"]
    talla: Literal["S", "M", "L", "XL"]
    en_rebaja: bool = False

    @property
    def precio_final(self):
        return round(self.precio_base * 0.9, 2) if self.en_rebaja else self.precio_base

    @property
    def disponible(self):
        return self.stock >= 10
