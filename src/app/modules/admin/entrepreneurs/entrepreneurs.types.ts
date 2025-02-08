export interface InventoryProduct
{
    id: string;
    category: string;
    name: string;
    ref: number;
    stock: number;
    precioDetal: number;
    precioEmprendedor: number;
    thumbnail: File;
    images: File;
}

export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface Entrepreneur
{
    nombre: string;
    telefono: string;
    documento: string;
    fechaIngreso: Date;
}
