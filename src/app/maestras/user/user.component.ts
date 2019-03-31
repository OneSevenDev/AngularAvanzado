import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Usuario } from 'src/app/services/user/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lista: Usuario[];

  constructor(
    private userService: UserService
    ) { }

  ngOnInit() {
    this.userService.listar().subscribe(req => {
      this.lista = req;
    });
  }
  nuevo() {

  }
  verdetalle() {

  }
}
