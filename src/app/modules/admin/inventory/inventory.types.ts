export interface Task {
    id?: string;
    content?: string;
    completed?: string;
}

export interface Label {
    id?: string;
    title?: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Note {
    id?: string;
    title?: string;
    content?: string;
    tasks?: Task[];
    image?: string | null;
    labels?: Label[];
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string | null;
}

export interface Product {
    id?: string;
    name?: string;
    precioEmprendedor?: number;
    precioDetal?: number;
    description?: string;
    image?: string | null;
    labels?: Label[];
    category?: Category;
}
