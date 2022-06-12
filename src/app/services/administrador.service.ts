import { Injectable } from '@angular/core';
import { Administrador } from '../models/administrador.model';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  administradores:Administrador[]=[
    new Administrador("Administrador","admin@gmail.com","af0123c56","5512345678"),
    new Administrador("Administrador2","admin2@gmail.com","af02443e58","5587654321")
  ];
  constructor() { }

  crearAdministrador(administrador: Administrador){
    this.administradores.push(administrador);
  }
  getAdministradores(){
    return this.administradores;
  }
  getAdministrador(nombre:string){
    return this.administradores.find(
      administrador=> administrador.nombre ===nombre
    );
  }
  eliminarAdministrador(index:number){
    this.administradores.splice(index,1);
  }
  modificarAdministrador(administrador:Administrador){

    let index = this.administradores.findIndex(
      administrador => administrador.correo ===administrador.correo
    );

    this.administradores[index]=administrador;
  }
}
