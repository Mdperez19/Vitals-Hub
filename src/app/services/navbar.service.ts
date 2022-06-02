import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
  titulo = new EventEmitter<string>();
  constructor() { }

  
}
