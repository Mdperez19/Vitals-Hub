import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';  //required when using MegaMenu

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  titulo:string = "";
  display:boolean=false;

  items: MenuItem[]=[];

  constructor(private navbar: NavbarService) {
    this.navbar.titulo.subscribe(
      (titulo:string)=>this.titulo=titulo
    );

   }

  ngOnInit(): void {
    
    this.items = [
      {label: 'Pacientes', icon: 'pi pi-fw pi-users',routerLink: 'Pacientes',command:(event)=>{this.display=false}},
      {label: 'Notificaciones', icon: 'pi pi-fw pi-bell', routerLink: 'Notificaciones',command:(event)=>{this.display=false}},
      {label: 'Agregar paciente', icon: 'pi pi-fw pi-user-plus',routerLink: 'AgregarPaciente',command:(event)=>{this.display=false}},
      {label: 'Agregar administrador', icon: 'pi pi-fw pi-star',routerLink: 'Agregaradmin',command:(event)=>{this.display=false}},
      {label: 'Agregar médico', icon: 'pi pi-fw pi-heart',routerLink: 'Agregarmedico',command:(event)=>{this.display=false}},
      {label: 'Eliminar paciente', icon: 'pi pi-fw pi-times',routerLink: 'EliminarPaciente',command:(event)=>{this.display=false}}
  ];
  }
  regresar(){
    this.navbar.titulo.emit("Principal");
  }

}
