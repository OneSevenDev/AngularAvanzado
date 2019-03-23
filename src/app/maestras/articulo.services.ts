import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';

@Injectable({
    providedIn: 'root'
})
export class ArticuloServices {
    constructor() {
        console.log('Hola desde articulo services');
    }

    agregarArticulo(art: Articulo) {
        let articulos: Articulo[] = this.listarArticulo();
        if (!articulos) {
            articulos = new Array();
        }
        articulos.push(art);
        this.setData('articulo', articulos);
    }

    listarArticulo(): Articulo[] {
        return JSON.parse(this.getValue('articulo'));
    }

    getValue(clave) {
        return localStorage.getItem(clave);
    }

    // setData(clave: string, valor: Articulo[]): void {
    setData(clave, valor): void {
        localStorage.setItem(clave, JSON.stringify(valor));
    }
}
