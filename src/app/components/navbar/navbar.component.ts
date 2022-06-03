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
      {label: 'Pacientes', icon: 'pi pi-fw pi-users',routerLink: 'Pacientes'},
      {label: 'Notificaciones', icon: 'pi pi-fw pi-bell'},
      {label: 'Agregar paciente', icon: 'pi pi-fw pi-user-plus',routerLink: 'Pacientes'},
      {label: 'Agregar administrador', icon: 'pi pi-fw pi-star',routerLink: 'Agregaradmin'},
      {label: 'Agregar médico', icon: 'pi pi-fw pi-heart',routerLink: 'Agregarmedico'}
  ];
  }

}
