import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  pacientes:Paciente[]=[
    new Paciente("Lissete López","15369728649",21,"llopezh1600@alumno.ipn.mx","Femenino","5 marzo 2001","5512345678","Ignacio López","5511345679","Sana",["Ninguna"],["Ninguna"],["Ninguna"],"9 junio 2022","O+",1),
    new Paciente("Daniel Pérez","53241581154",21,"mperezp1603@alumno.ipn.mx","Masculino","3 abril 2001","5561501224","Mario Pérez","5530401143","Sana",["Ninguna"],["Ninguna"],["Ninguna"],"9 junio 2022","AB+",2),

    new Paciente("Alberto Palacios","13654697821",22,"apalaciosc1601@alumno.ipn.mx","Masculino","13 septiembre 1999","5532165789","Juan","5532465681","Sana",["Ninguna"],["Ninguna"],["Ninguna"],"9 junio 2022","O-",3)
  ];

  constructor() { }

  agregarPaciente(paciente:Paciente){
    this.pacientes.push(paciente);
  }
  getPacientes(){
    return this.pacientes;
  }

  getPaciente(nombre:string){
    return this.pacientes.find(
       paciente  => paciente.nombre===nombre
    );
  }

  eliminarPaciente(index:number){
    this.pacientes.splice(index,1);
  }
  modificarPaciente(paciente:Paciente){
    let temp=this.pacientes.find(
      paciente  => paciente.nss===paciente.nss
   );
    let index = this.pacientes.indexOf(temp!);

    this.pacientes[index]=paciente;

  }
}
