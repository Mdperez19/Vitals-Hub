import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-agregar-admin',
  templateUrl: './agregar-admin.component.html',
  styleUrls: ['./agregar-admin.component.css']
})
export class AgregarAdminComponent implements OnInit {

  constructor(private navbar:NavbarService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Agregar administrador");
  }
}
