import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-aritulo',
  templateUrl: './aritulo.component.html',
  styleUrls: ['./aritulo.component.css']
})
export class ArituloComponent implements OnInit {

  bienvenida: string;
  lista: Articulo[];

  constructor() { }

  ngOnInit() {
    this.bienvenida = 'Hola mundo por variable';
    this.lista = [
      { codigo: 1, nombre: 'Laptop', precio: 4000 },
      { codigo: 2, nombre: 'Monitor', precio: 420 }
    ];
  }

  saludar() {
    console.log(this.lista);
  }

}
