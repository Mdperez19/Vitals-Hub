import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacientesService } from 'src/app/services/pacientes.service';
@Component({
    selector: 'app-paciente',
    templateUrl: './paciente.component.html',
    styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
    data: any;
    data2: any;
    data3: any;
    chartOptions: any;
    basicOptions: any;
    
    paciente: Paciente | undefined;
    nombre: string = "";
    temperatura:number = 0;
    spO2:number = 0;
    ppm:number = 0;   
    constructor(private navbar: NavbarService, private rutaActiva: ActivatedRoute, private datos: PacientesService) { }

    ngOnInit() {    
        this.paciente = this.datos?.getPaciente(this.rutaActiva.snapshot.params.paciente);
        this.nombre = this.paciente?.nombre!;
        this.temperatura = this.paciente?.temperatura!;
        this.spO2 = this.paciente?.spO2!;
        this.ppm = this.paciente?.ppm!;

        this.navbar.titulo.emit("Signos Vitales"); 
        this.data = {
            datasets: [{
                data: [55-this.temperatura, this.temperatura],
                backgroundColor: [
                    'white',
                    '#FD8F52'
                ],
            }]
        };

        this.data2 = {
            datasets: [{
                data: [100-this.spO2, this.spO2],
                backgroundColor: [
                    'white',
                    '#35BBCA'
                ],
            }]
        };
        this.data3 = {
            labels: ['Pulsos por minuto'],
            datasets: [
                {
                    label: 'Pulsos por minuto',
                    backgroundColor: '#C73866',
                    data: [this.ppm]
                }
            ]
        };

    this.chartOptions = {
        responsive: true,
        tooltips: {
            enabled: false
       }
      };

      this.basicOptions = {
        responsive: true,
        plugins: {      
            legend: {
              display: false
            }         
        }
        
    };

    }
}
