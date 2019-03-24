import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {
    const demo = new Observable( observer => {
      let contador = 0;
      const interval = setInterval( () => {
        contador += 1;
        observer.next(contador);
        if (contador === 5) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    });

    demo.subscribe(
      req => {
      console.log(req);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('Finish observable');
      });
  }

  ngOnInit() {
  }

}
