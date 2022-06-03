import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  pacientes:Paciente[]=[
    new Paciente("Liss","51515",21,"aaa@aaa.com","Femenino","5 marzo 2001",["a la tarea xd","a la escuela"],"muy wapa","555555","Nacho","55555"),
    new Paciente("Dani","51515",21,"aaa@bbb.com","Masculino","3 abril 2001",["a la tarea x2 xd"],"el mas flojo del equipo","555555","familiar1","55555"),
    new Paciente("Beto","51515",21,"aaa@ccc.com","Masculino","13 septiembre 1999",["a la tarea x3 xd"],"muy wapo","555555","familiar2","88545")
  ];

  constructor() { }

  getPacientes(){
    return this.pacientes;
  }

  getPaciente(nombre:string){
    return this.pacientes.find(
       paciente  => paciente.nombre===nombre
    );
  }
}
