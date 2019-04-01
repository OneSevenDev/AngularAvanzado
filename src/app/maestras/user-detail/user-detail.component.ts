import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Usuario, ObtenerUsuarioRequest, TipoUsuario } from 'src/app/services/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() idusuario: number;
  @Output() operationComplete: EventEmitter<boolean> = new EventEmitter();
  user: ObtenerUsuarioRequest;
  tipoUsuario: TipoUsuario;

  constructor(
    private usuarioServices: UserService
  ) {
    this.idusuario = 0;
   }

  ngOnInit() {
    this.usuarioServices.listarTipoUsuario().subscribe(req => {
      this.tipoUsuario = req;
    });
    this.usuarioServices.obtenerusuario(this.idusuario).subscribe(req => {
      this.user = req;
    });
  }
  grabarNg() {
    this.usuarioServices.actualizarUsuario(this.user).subscribe(req => {
      console.log(req);
      this.operationComplete.emit(true);
    }, err => {
      this.operationComplete.emit(false);
    });
  }
}
