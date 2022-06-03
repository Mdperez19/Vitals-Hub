import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes.service';
@Component({
  selector: 'app-historialpacientes',
  templateUrl: './historialpacientes.component.html',
  styleUrls: ['./historialpacientes.component.css']
})
export class HistorialpacientesComponent implements OnInit {
  
  paciente:Paciente|undefined;

  constructor(private navbar: NavbarService,private rutaActiva: ActivatedRoute,private datos: PacientesService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Historial Clínico");
    this.paciente= this.datos?.getPaciente(this.rutaActiva.snapshot.params.paciente);
  }

}
