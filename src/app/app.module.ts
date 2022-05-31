import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**NGPrime */
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
/******** */

import { LoginComponent } from './components/sesion/login/login.component';
import { SesionComponent } from './components/sesion/sesion.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
