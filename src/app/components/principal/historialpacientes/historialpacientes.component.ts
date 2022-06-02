import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-historialpacientes',
  templateUrl: './historialpacientes.component.html',
  styleUrls: ['./historialpacientes.component.css']
})
export class HistorialpacientesComponent implements OnInit {

  constructor(private navbar: NavbarService,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Historial Clínico");
    console.log(this.rutaActiva.snapshot.params.paciente);
  }

}
