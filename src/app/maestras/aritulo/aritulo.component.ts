import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';
import { Router } from '@angular/router';
import { ArticuloServices } from '../articulo.services';

@Component({
  selector: 'app-aritulo',
  templateUrl: './aritulo.component.html',
  styleUrls: ['./aritulo.component.css']
})
export class ArituloComponent implements OnInit {

  bienvenida: string;
  lista: Articulo[];

  constructor(
    private router: Router,
    private articuloServices: ArticuloServices
  ) { }

  ngOnInit() {
    this.bienvenida = 'Hola mundo por variable';
    // this.lista = [
    //   { codigo: 1, nombre: 'Laptop', precio: 4000 },
    //   { codigo: 2, nombre: 'Monitor', precio: 420 }
    // ];
    this.lista = this.articuloServices.listarArticulo();
  }

  nuevo() {
    this.router.navigate(['/articulo', 0]);
  }

  verDetalle(id: number) {
    this.router.navigate(['/articulo', id]);
  }
}
