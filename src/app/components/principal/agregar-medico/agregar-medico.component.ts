import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {
  dateValue:string="";
  default:Date=new Date("04/06/1960");
  constructor(private navbar:NavbarService) { }

  ngOnInit(): void {
    this.navbar.titulo.emit("Agregar médico");
  }

  getMinDate(){
    let minDateValue:Date= new Date();
    minDateValue.setFullYear(minDateValue.getFullYear()-18);
    return minDateValue;
  }

}
