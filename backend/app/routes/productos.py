from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.database import coleccion_productos
from fastapi.encoders import jsonable_encoder
from app.schemas.producto_union import ProductoUnion
from app.utils.calculo import calcular_precio_disponibilidad

router = APIRouter()

@router.post("/")
def crear_producto(producto: ProductoUnion):
    data = jsonable_encoder(producto)

    # Agregar campos calculados
    data["precio_final"] = producto.precio_final
    data["disponible"] = producto.disponible

    result = coleccion_productos.insert_one(data)
    # result = coleccion_productos.insert_one(producto)
    return {"id": str(result.inserted_id)}

@router.get("/")
def listar_productos():
    productos = list(coleccion_productos.find())
    for p in productos:
        p["id"] = str(p["_id"])
        del p["_id"]
    return productos

@router.get("/{producto_id}")
def obtener_producto(producto_id: str):
    producto = coleccion_productos.find_one({"_id": ObjectId(producto_id)})
    if not producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    producto["id"] = str(producto["_id"])
    del producto["_id"]
    return producto

@router.get("/{producto_id}/calculo")
def obtener_calculo(producto_id: str):
    producto = coleccion_productos.find_one({"_id": ObjectId(producto_id)})
    if not producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return calcular_precio_disponibilidad(producto)

@router.put("/{producto_id}")
def actualizar_producto(producto_id: str, producto: ProductoUnion):
    data = jsonable_encoder(producto)
    data["precio_final"] = producto.precio_final
    data["disponible"] = producto.disponible
    
    result = coleccion_productos.update_one({"_id": ObjectId(producto_id)}, {"$set": data})
    return {"mensaje": "Producto actualizado"}

@router.delete("/{producto_id}")
def eliminar_producto(producto_id: str):
    coleccion_productos.delete_one({"_id": ObjectId(producto_id)})
    return {"mensaje": "Producto eliminado"}
