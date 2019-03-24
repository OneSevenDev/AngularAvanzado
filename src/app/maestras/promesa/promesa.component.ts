import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  constructor() {
    this.fnContador()
      .then((req) => {
        console.log(req);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Promesa terminada');
      });
  }

  fnContador(): Promise<string> {
    const promesa: Promise<string> = new Promise( (resolve, reject) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 4) {
          clearInterval(interval);
          // resolve('termino');
          reject('Algo salio mal');
        }
      }, 1000);
    });
    return promesa;
  }

  ngOnInit() {
  }

}
