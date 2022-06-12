import { Component, Input, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador.model';
import { AdministradorService } from 'src/app/services/administrador.service';
import { NavbarService } from 'src/app/services/navbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-administradores',
  templateUrl: './lista-administradores.component.html',
  styleUrls: ['./lista-administradores.component.css']
})
export class ListaAdministradoresComponent implements OnInit {
  @Input() operacion:string="Lista";
  administradores:Administrador[]=[];
  filtro: any = { nombre: '' };
  constructor(private navbar:NavbarService,private datos:AdministradorService) { }

  ngOnInit(): void {
    this.administradores = this.datos.getAdministradores();
  }
  eliminarPaciente(administrador:Administrador){
    let index = this.administradores.indexOf(administrador);
    Swal.fire({
      title: 'Eliminar',
      text: `Desea eliminar al administrador: ${administrador.nombre}?`,
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#0191B4',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.datos.eliminarAdministrador(index);
      }
    });
    
  }

}
