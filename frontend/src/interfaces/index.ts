
export enum ProductType {
    ELECTRONIC = "electronico",
    FOOD = "alimento",
    CLOTHES = "ropa",
}

export interface BaseProduct {
    id: string;
    nombre: string;
    tipo: ProductType;
    precio_base: number;
    stock: number;
    precio_final: number;
    disponible: boolean;
}

interface Electronic extends BaseProduct {
    tipo: ProductType.ELECTRONIC;
    garantia_meses: number;
    fecha_fabricacion: string;
}

interface Food extends BaseProduct {
    tipo: ProductType.FOOD;
    fecha_caducidad: string;
}

export enum ClothesSize {
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
}

interface Clothes extends BaseProduct {
    tipo: ProductType.CLOTHES;
    talla: ClothesSize;
    en_rebaja: boolean;
}

export type Product = Electronic | Food | Clothes;

export type NewProductForm = Omit<Electronic, "id" | "precio_final" | "disponible"> | Omit<Food, "id" | "precio_final" | "disponible"> | Omit<Clothes, "id" | "precio_final" | "disponible">;