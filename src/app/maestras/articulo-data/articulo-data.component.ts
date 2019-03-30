import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { Articulo } from '../articulo.model';
import { ArticuloServices } from '../articulo.services';

@Component({
  selector: 'app-articulo-data',
  templateUrl: './articulo-data.component.html',
  styleUrls: ['./articulo-data.component.css']
})
export class ArticuloDataComponent implements OnInit {

  forma: FormGroup;
  // articulo: Articulo;
  articulo: Articulo = {
    codigo: 0,
    nombre: '',
    precio: 0
  };
  codigo: number;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private articuloService: ArticuloServices
    ) {
      //
     }

  ngOnInit() {
    this.cargaInicial();
    this.forma = new FormGroup({
      cod: new FormControl(this.articulo.codigo, [ Validators.required ]),
      nom: new FormControl(this.articulo.nombre, [ Validators.required, Validators.minLength(3) ]),
      prec: new FormControl(this.articulo.precio)
    });
  }

  cargaInicial() {
    this.activated.params.subscribe(dato => {
      this.codigo = Number(dato.id);
      if (this.codigo !== 0) {
        this.articuloService.recuperarArticulo(this.codigo).subscribe(req => {
          this.articulo = req;
          console.log(req);
          this.forma.setValue({
            cod: this.articulo.codigo,
            nom: this.articulo.nombre,
            prec: this.articulo.precio
          });
        });
      }
    });
  }

  volverPagina() {
    this.router.navigate(['/articulo']);
  }
}
