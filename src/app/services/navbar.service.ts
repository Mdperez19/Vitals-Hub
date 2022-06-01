import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  titulo:string = "";
  constructor() { }

  cambiarTitulo(titulo:string){
    this.titulo = titulo;
  }

  
}
