import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  progreso1: number;
  progreso2: number;

  constructor() {
    this.progreso1 = 0;
    this.progreso2 = 0;
  }

  ngOnInit() {
  }

  recibir(valor: number) {
    this.progreso1 = valor;
  }
}
