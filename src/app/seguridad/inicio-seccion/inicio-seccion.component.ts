import { Component, OnInit } from '@angular/core';
import { UsuarioLoginRequest } from '../inicio-session.model';
import { InicioSessionService } from '../inicio-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-seccion',
  templateUrl: './inicio-seccion.component.html',
  styleUrls: ['./inicio-seccion.component.css']
})
export class InicioSeccionComponent implements OnInit {
  user: UsuarioLoginRequest = { login: '', clave: ''};
  constructor(
    private sessionServices: InicioSessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  autenticar(formulario: any): void {
    this.sessionServices.autenticar(this.user).subscribe( (response: any) => {
      console.log('succ: ' + JSON.stringify(response));
      localStorage.setItem('token', JSON.stringify(response.token));
      localStorage.setItem('rutaimagen', JSON.stringify(response.rutaimagen));
      this.router.navigate(['/articulo']);
    }, err => {
      console.log('err: ' + err);
    }, () => {
      console.log('termino !');
    });
  }
}
