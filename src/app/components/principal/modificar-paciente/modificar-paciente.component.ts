import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-modificar-paciente',
  templateUrl: './modificar-paciente.component.html',
  styleUrls: ['./modificar-paciente.component.css']
})
export class ModificarPacienteComponent implements OnInit {
  paciente:Paciente|undefined;
  
  operacion:string="Modificar";
  constructor(private navbar: NavbarService,private rutaActiva: ActivatedRoute,private datos: PacientesService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Modificar Paciente");
    this.paciente= this.datos?.getPaciente(this.rutaActiva.snapshot.params.paciente);
  }

}
