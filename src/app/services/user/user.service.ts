import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, ObtenerUsuarioRequest } from './user.model';
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

  listarConTipo(): Observable<any> {
    return this.http.get(environment.urlBackend + 'usuario/listarcontipo');
  }

  obtenerusuario(id: number): Observable<any> {
    return this.http.get(environment.urlBackend + '/usuario/Obtener', { params: new HttpParams().append('id', String(id)) });
  }

  listarTipoUsuario(): Observable<any> {
    return this.http.get(environment.urlBackend + '/usuario/ListarTipoUsuario');
  }

  actualizarUsuario(user: ObtenerUsuarioRequest): Observable<any> {
    const strArt = JSON.stringify(user);
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    return this.http.post(
        environment.urlBackend + '/usuario/Actualizar',
        strArt,
        { headers: header }
        );
  }
}
