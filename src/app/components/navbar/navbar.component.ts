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

  constructor(private navbar: NavbarService) { }

  ngOnInit(): void {
    this.titulo=this.navbar.getTitulo();
    this.items = [
      {label: 'Pacientes', icon: 'pi pi-fw pi-heart'},
      {label: 'Notificaciones', icon: 'pi pi-fw pi-bell'}
  ];
  }

}
