import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { ArticuloServices } from '../articulo.services';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  codigo: number;

  constructor(
    private router: Router,
    // private location: Location,
    private activated: ActivatedRoute,
    private articuloService: ArticuloServices
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(dato => {
      this.codigo = dato.id;
      console.log(this.codigo);
    });
  }

  volverPagina() {
    this.router.navigate(['/articulo']);
    // this.location.back();
  }

  grabar() {
    const art: Articulo = {
      codigo: 1,
      nombre: 'laptop',
      precio: 4000
    };
    this.articuloService.agregarArticulo(art);
    this.router.navigate(['/articulo']);
  }
}
