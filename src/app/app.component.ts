import { Component, OnInit } from '@angular/core';

declare const M: any; //materilize
declare const $: any; // jquery
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Vitals-Hub';
  ngOnInit() {
    //M.AutoInit();
  }
}
