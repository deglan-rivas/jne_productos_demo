from app.models.ropa import ProductoRopa
from app.models.electronico import ProductoElectronico
from app.models.alimento import ProductoAlimento

def calcular_precio_disponibilidad(data: dict):
    tipo = data.get("tipo")

    if tipo == "ropa":
        producto = ProductoRopa(**data)
    elif tipo == "electronico":
        producto = ProductoElectronico(**data)
    elif tipo == "alimento":
        producto = ProductoAlimento(**data)
    else:
        raise ValueError("Tipo de producto no reconocido")

    return {
        "precio_final": producto.precio_final,
        "disponible": producto.disponible
    }
