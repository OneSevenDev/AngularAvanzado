export class Articulo {
    codigo: number;
    nombre: string;
    precio: number;

    constructor(art: any) {
        this.codigo = art.codigo;
        this.nombre = art.nombre;
        this.precio = art.precio;
    }
}
