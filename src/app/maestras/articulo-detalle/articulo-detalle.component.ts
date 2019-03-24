import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { ArticuloServices } from '../articulo.services';
import { Articulo } from '../articulo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  codigo: number;
  art: Articulo = { codigo: 0, nombre: '', precio: 0 };

  constructor(
    private router: Router,
    // private location: Location,
    private activated: ActivatedRoute,
    private articuloService: ArticuloServices
  ) {
    // this.art = new Articulo(Articulo);
   }

  ngOnInit() {
    this.activated.params.subscribe(dato => {
      this.codigo = Number(dato.id);
      if (this.codigo !== 0) {
        this.articuloService.recuperarArticulo(this.codigo).subscribe(req => {
          this.art = req;
          console.log(req);
        });
      }
    });
  }

  volverPagina() {
    this.router.navigate(['/articulo']);
    // this.location.back();
  }

  grabarNg(forma: NgForm) {
    if (forma.valid) {
      if (this.art.codigo === 0) {
        this.articuloService.agregarArticuloWs(this.art).subscribe(
          req => {
            console.log(req);
          },
          err => {
            console.log(err);
          });
      } else {
        this.articuloService.actualizarArticuloWs(this.art).subscribe(
          req => {
            console.log(req);
          },
          err => {
            console.log(err);
          });
      }
    }
    // console.log(forma);
    // console.log(this.art);
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
