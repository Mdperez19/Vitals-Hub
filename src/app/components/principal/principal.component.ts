import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(private navbar: NavbarService) { }

  ngOnInit(): void {
      this.navbar.cambiarTitulo("Signos Vitales");
  }

}
