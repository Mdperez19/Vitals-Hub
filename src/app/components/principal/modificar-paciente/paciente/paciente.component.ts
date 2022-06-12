import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  operacion: string = "Modificar";
  paciente: Paciente | undefined;
  nombre: string = "";
  nss: string = "";
  edad: number = 0;
  correo: string = "";
  sexo: string = "";
  fecha_nacimiento: Date | undefined;
  telefono: string = "";
  nombre_familiar: string = "";
  telefono_familiar: string = "";


  diagnostico: string = "";
  antecedentes_heredofamiliares: string[] = [];
  antecedentes_nopatologicos: string[] = [];
  antecedentes_patologicos: string[] = [];
  fecha_ingreso: Date | undefined;
  grupo_sanguineo: string = "";
  num_cama: number = 0;

  constructor(private navbar: NavbarService, private rutaActiva: ActivatedRoute, private datos: PacientesService, private router: Router) { }


  ngOnInit(): void {
    this.navbar.titulo.emit("Modificar Paciente");
    this.paciente = this.datos?.getPaciente(this.rutaActiva.snapshot.params.paciente);

    this.nombre = this.paciente?.nombre!;
    this.nss = this.paciente?.nss!;
    this.edad = this.paciente?.edad!;
    this.correo = this.paciente?.correo!;
    this.sexo = this.paciente?.sexo!;
    this.fecha_nacimiento = new Date(this.paciente?.fecha_nacimiento!);
    this.telefono=this.paciente?.telefono!;
    this.nombre_familiar=this.paciente?.nombre_familiar!;
    this.telefono_familiar=this.paciente?.telefono_familiar!;
    this.diagnostico=this.paciente?.diagnostico!;
    this.antecedentes_heredofamiliares=this.paciente?.antecedentes_heredofamiliares!;
    this.antecedentes_nopatologicos=this.paciente?.antecedentes_nopatologicos!;
    this.antecedentes_patologicos=this.paciente?.antecedentes_patologicos!;
    this.fecha_ingreso=new Date(this.paciente?.fecha_ingreso!);
    this.grupo_sanguineo=this.paciente?.grupo_sanguineo!;
    this.num_cama=this.paciente?.num_cama!;

  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    Swal.fire({
      title: 'Modificado',
      text: "Paciente modificado",
      icon: 'success',
      confirmButtonText: 'Continuar!',
      confirmButtonColor: '#0191B4'
    }).then((result) => {
      if (result.isConfirmed) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        f.value.fecha_ingreso = f.value.fecha_ingreso.toLocaleDateString("es-ES", options);
        f.value.fecha_nacimiento = f.value.fecha_nacimiento.toLocaleDateString("es-ES", options);
        this.datos.modificarPaciente(f.value);
        f.resetForm();
        this.router.navigate(['Principal/Pacientes']);
      }
    });

  }
}
