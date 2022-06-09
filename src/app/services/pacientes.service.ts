import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  pacientes:Paciente[]=[
    new Paciente("Lissete López","15369728649",21,"llopezh1600@alumno.ipn.mx","Femenino","5 marzo 2001",["Negadas"],"muy wapa","5567470956","Ignacio López","5527560956"),
    new Paciente("Daniel Pérez","53241581154",21,"mperezp1603@alumno.ipn.mx","Masculino","3 abril 2001",["Negadas"],"el mas flojo del equipo","5540596328","Mario Pérez","5592440956"),
    new Paciente("Alberto Palacios","13654697821",22,"apalaciosc1601@alumno.ipn.mx","Masculino","13 septiembre 1999",["Negadas"],"muy wapo","5589564720","Martín Palacios","5533640956")
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
