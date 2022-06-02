import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-signosvitales',
  templateUrl: './signosvitales.component.html',
  styleUrls: ['./signosvitales.component.css']
})
export class SignosvitalesComponent implements OnInit {

  constructor(private navbar: NavbarService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Signos Vitales");
    
  }

}
