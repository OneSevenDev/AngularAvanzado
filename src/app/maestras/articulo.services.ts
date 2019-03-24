import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Articulo } from './articulo.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticuloServices {
    constructor(
        private http: HttpClient
    ) {
        console.log('Hola desde articulo services');
        // this.listartArticuloWs();
    }

    listartArticuloWsGetData(): Articulo[] {
        this.http
            .get('http://localhost:52980/api/articulo/listar')
            .subscribe(
                req => {
                    console.log(req);
                },
                err => {
                    console.log(err);
                });
        return null;
    }

    listartArticuloWs(): Observable<any> {
        return this.http.get('http://localhost:52980/api/articulo/listar');
    }

    recuperarArticulo(id: number): Observable<any> {
        return this.http.get('http://localhost:52980/api/articulo/recuperar', { params: new HttpParams().append('id', String(id)) });
    }

    agregarArticuloWs(art: Articulo): Observable<any> {
        return this.http.post(
            'http://localhost:52980/api/articulo/insertar',
            {
                params: new HttpParams()
                    .append('codigo', String(art.codigo))
                    .append('nombre', art.nombre)
                    .append('precio', String(art.precio))
            });
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
