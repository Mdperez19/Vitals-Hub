import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-listapacientes',
  templateUrl: './listapacientes.component.html',
  styleUrls: ['./listapacientes.component.css']
})
export class ListapacientesComponent implements OnInit {
  pacientes:Paciente[]=[];
  filtro: any = { nombre: '' };
  constructor(private navbar:NavbarService,private datos:PacientesService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Lista de pacientes");
    this.pacientes=this.datos.getPacientes();
  }

}
