import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdministradorService } from 'src/app/services/administrador.service';
import { NavbarService } from 'src/app/services/navbar.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-admin',
  templateUrl: './agregar-admin.component.html',
  styleUrls: ['./agregar-admin.component.css']
})
export class AgregarAdminComponent implements OnInit {
  nombre: string = "";
  correo: string = "";
  contrasena: string = "";
  telefono: string = "";
  constructor(private navbar: NavbarService, private adminService:AdministradorService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Agregar administrador");
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }

    Swal.fire({
      title: 'Agregado',
      text: "Administrador agregado",
      icon: 'success',
      confirmButtonText: 'Continuar!',
      confirmButtonColor: '#0191B4'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.crearAdministrador(f.value);
        f.resetForm();
      }
    });
    
  }
}
