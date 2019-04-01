import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lista: any[];
  idusuario: number;

  constructor(
    private userService: UserService,
    private changeDetector: ChangeDetectorRef
    ) { }

  ngOnInit() {
    // this.userService.listar().subscribe(req => {
    //   this.lista = req;
    // });
    this.changeDetector.detectChanges();
    this.userService.listarConTipo().subscribe(req => {
      this.lista = req;
    });
  }
  nuevo() {

  }
  verdetalle(idusuario: number) {
    this.idusuario = idusuario;
    this.changeDetector.detectChanges();
  }
  reloadList(isSuccess: boolean) {
    if (isSuccess) {
      this.userService.listarConTipo().subscribe(req => {
        this.lista = req;
      });
      this.idusuario = undefined;
    } else {
      console.log('No se guardo el usuario');
    }
  }
}
