import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-signosvitales',
  templateUrl: './signosvitales.component.html',
  styleUrls: ['./signosvitales.component.css']
})
export class SignosvitalesComponent implements OnInit {
  paciente:Paciente|undefined;
  
  operacion:string="Signos";
  constructor(private navbar: NavbarService,private rutaActiva: ActivatedRoute,private datos: PacientesService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Signos Vitales");
    this.paciente= this.datos?.getPaciente(this.rutaActiva.snapshot.params.paciente);
  }

}
