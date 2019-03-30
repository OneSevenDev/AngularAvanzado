import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsuarioLoginRequest } from './inicio-session.model';

@Injectable({
  providedIn: 'root'
})
export class InicioSessionService {

  constructor(
    private http: HttpClient
  ) { }

  autenticar(user: UsuarioLoginRequest) {
    const cadena = JSON.stringify(user);
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    return this.http.post(
        environment.urlBackend + 'auth/validate',
        cadena,
        { headers: header }
        );
  }
}
