import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent implements OnInit {
    nombre: string="";
    nss:string="";
    edad:number=0;
    correo:string="";
    sexo:string="";
    fecha_nacimiento:string="";
    telefono:string="";
    nombre_familiar:string="";
    telefono_familiar:string="";

    
    diagnostico:string="";
    antecedentes_heredofamiliares:string[]=[];
    antecedentes_nopatologicos:string[]=[];
    antecedentes_patologicos:string[]=[];
    fecha_ingreso:string="";
    grupo_sanguineo:string="";
    num_cama:number=0;

  constructor(private navbar: NavbarService,private pacienteService:PacientesService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Agregar paciente");
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    Swal.fire({
      title: 'Agregado',
      text: "Paciente agregado",
      icon: 'success',
      confirmButtonText: 'Continuar!',
      confirmButtonColor: '#0191B4'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacienteService.agregarPaciente(f.value);
        f.resetForm();
      }
    });
    
  }

}
