import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  @Input() progreso: number;
  @Input() titulo: string;
  @Output() cambiaValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.progreso = 0;
    this.titulo = '';
   }

  ngOnInit() {
  }

  incrementar(cantidad: number) {
    this.progreso += cantidad;
    this.cambiaValor.emit(this.progreso);
  }
  cambiar() {
    this.cambiaValor.emit(this.progreso);
  }
}
