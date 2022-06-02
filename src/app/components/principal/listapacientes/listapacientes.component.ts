import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-listapacientes',
  templateUrl: './listapacientes.component.html',
  styleUrls: ['./listapacientes.component.css']
})
export class ListapacientesComponent implements OnInit {
  pacientes:Paciente[]=[];
  constructor(private navbar:NavbarService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Lista de pacientes");

    this.pacientes.push(new Paciente("Liss","51515",21,"aaa@aaa.com","Femenino","5 marzo 2001",["a la tarea xd"],"muy wapa","555555","Nacho","55555"));

    this.pacientes.push(new Paciente("Dani","51515",21,"aaa@bbb.com","Masculino","3 abril 2001",["a la tarea x2 xd"],"el mas flojo del equipo","555555","familiar1","55555"));

    this.pacientes.push(new Paciente("Beto","51515",21,"aaa@ccc.com","Masculino","13 septiembre 1999",["a la tarea x3 xd"],"muy wapo","555555","familiar2","88545"));
    
  }

}
