import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listapacientes',
  templateUrl: './listapacientes.component.html',
  styleUrls: ['./listapacientes.component.css']
})
export class ListapacientesComponent implements OnInit {
  @Input() operacion:string="Lista";
  pacientes:Paciente[]=[];
  
  filtro: any = { nombre: '' };
  constructor(private navbar:NavbarService,private datos:PacientesService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Lista de pacientes");
    this.pacientes=this.datos.getPacientes();
  }

  eliminarPaciente(paciente:Paciente){
    let index = this.pacientes.indexOf(paciente);
    Swal.fire({
      title: 'Eliminar',
      text: `Desea eliminar al paciente ${paciente.nombre}?`,
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#0191B4',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.datos.eliminarPaciente(index);
      }
    });
    
  }
}
