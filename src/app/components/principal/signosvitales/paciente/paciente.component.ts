import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
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
    temperatura = 36;
    spO2 = 96;
    ppm = 80;
    constructor(private navbar: NavbarService) { }

    ngOnInit() {
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
