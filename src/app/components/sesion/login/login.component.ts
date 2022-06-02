import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    
    Swal.fire({
      title: 'Bienvenido!',
      text: "Sesión iniciada",
      icon: 'success',
      confirmButtonText: 'Continuar!',
      confirmButtonColor: '#0191B4'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['Principal']);
      }
    });

    
  }
}
