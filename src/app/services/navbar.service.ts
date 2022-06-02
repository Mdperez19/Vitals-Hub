import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private titulo:string = "";
  constructor() { }

  cambiarTitulo(titulo:string){
    this.titulo = titulo;
  }

  getTitulo(){
    return this.titulo;
  }

  
}
