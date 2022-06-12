import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
/**NGPrime */
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {AvatarModule} from 'primeng/avatar';
import {MenuModule} from 'primeng/menu';
import {ImageModule} from 'primeng/image';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {ChipsModule} from 'primeng/chips';
/******** */

/*****Librerias externas */
import { FilterPipeModule } from 'ngx-filter-pipe';
/******************** */

import { LoginComponent } from './components/sesion/login/login.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './services/navbar.service';
import { SignosvitalesComponent } from './components/principal/signosvitales/signosvitales.component';
import { ErrorComponent } from './components/error/error.component';
import { ListapacientesComponent } from './components/principal/listapacientes/listapacientes.component';
import { HistorialpacientesComponent } from './components/principal/historialpacientes/historialpacientes.component';
import { AgregarMedicoComponent } from './components/principal/agregar-medico/agregar-medico.component';
import { AgregarAdminComponent } from './components/principal/agregar-admin/agregar-admin.component';
import { NotificacionesComponent } from './components/principal/notificaciones/notificaciones.component';
import { EliminarAdminComponent } from './components/principal/eliminar-admin/eliminar-admin.component';
import { AgregarPacienteComponent } from './components/principal/agregar-paciente/agregar-paciente.component';
import { EliminarPacienteComponent } from './components/principal/eliminar-paciente/eliminar-paciente.component';
import { ModificarPacienteComponent } from './components/principal/modificar-paciente/modificar-paciente.component';
import { PacienteComponent } from './components/principal/modificar-paciente/paciente/paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SesionComponent,
    FooterComponent,
    PrincipalComponent,
    NavbarComponent,
    SignosvitalesComponent,
    ErrorComponent,
    ListapacientesComponent,
    HistorialpacientesComponent,
    AgregarMedicoComponent,
    AgregarAdminComponent,
    NotificacionesComponent,
    EliminarAdminComponent,
    AgregarPacienteComponent,
    EliminarPacienteComponent,
    ModificarPacienteComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    ButtonModule,
    SidebarModule,
    AvatarModule,
    MenuModule,
    FormsModule,
    FilterPipeModule,
    ImageModule,
    AccordionModule,
    CalendarModule,
    InputMaskModule,
    ChipsModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
