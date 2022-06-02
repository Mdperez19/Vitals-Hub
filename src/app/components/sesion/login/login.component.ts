import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

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
    this.router.navigate(['Principal']);
  }
}
