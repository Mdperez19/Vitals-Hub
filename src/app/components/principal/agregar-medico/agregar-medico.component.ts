import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {
  dateValue:string="";
  constructor(private navbar:NavbarService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Agregar médico");
  }

}
