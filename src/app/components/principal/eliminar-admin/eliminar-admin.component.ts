import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-eliminar-admin',
  templateUrl: './eliminar-admin.component.html',
  styleUrls: ['./eliminar-admin.component.css']
})
export class EliminarAdminComponent implements OnInit {
  operacion:string="Eliminar";
  constructor(private navbar:NavbarService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Eliminar Administrador");
  }

}
