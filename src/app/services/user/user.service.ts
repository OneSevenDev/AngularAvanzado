import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<any> {
    return this.http.get(environment.urlBackend + 'usuario/listar');
  }

  actualizar() {

  }
}
