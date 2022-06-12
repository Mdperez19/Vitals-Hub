import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { AgregarAdminComponent } from './components/principal/agregar-admin/agregar-admin.component';
import { AgregarMedicoComponent } from './components/principal/agregar-medico/agregar-medico.component';
import { AgregarPacienteComponent } from './components/principal/agregar-paciente/agregar-paciente.component';
import { EliminarAdminComponent } from './components/principal/eliminar-admin/eliminar-admin.component';
import { EliminarPacienteComponent } from './components/principal/eliminar-paciente/eliminar-paciente.component';
import { HistorialpacientesComponent } from './components/principal/historialpacientes/historialpacientes.component';
import { ListapacientesComponent } from './components/principal/listapacientes/listapacientes.component';
import { AdministradorComponent } from './components/principal/modificar-admin/administrador/administrador.component';
import { ModificarAdminComponent } from './components/principal/modificar-admin/modificar-admin.component';
import { ModificarPacienteComponent } from './components/principal/modificar-paciente/modificar-paciente.component';
import { PacienteComponent } from './components/principal/modificar-paciente/paciente/paciente.component';
import { NotificacionesComponent } from './components/principal/notificaciones/notificaciones.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SignosvitalesComponent } from './components/principal/signosvitales/signosvitales.component';
import { LoginComponent } from './components/sesion/login/login.component';
import { SesionComponent } from './components/sesion/sesion.component';

const routes: Routes = [
  {path:'',component:SesionComponent},
  {path:'Sesion',component:SesionComponent},
  {path:'Principal',component:PrincipalComponent,children:[
    {path:'SignosVitales',component:SignosvitalesComponent},
    {path:'Pacientes',component:ListapacientesComponent},
    {path:'Historial/:paciente',component:HistorialpacientesComponent},
    {path:'Agregarmedico',component:AgregarMedicoComponent},
    {path:'Agregaradmin',component:AgregarAdminComponent},
    {path:'AgregarPaciente',component:AgregarPacienteComponent},
    {path: 'Notificaciones',component:NotificacionesComponent},
    {path: 'EliminarPaciente',component:EliminarPacienteComponent},
    {path: 'ModificarPaciente',component:ModificarPacienteComponent},
    {path: 'ModificarPaciente/:paciente',component:PacienteComponent},
    {path: 'EliminarAdmin',component:EliminarAdminComponent},
    {path: 'ModificarAdmin',component:ModificarAdminComponent},
    {path: 'ModificarAdmin/:administrador',component:AdministradorComponent}
  ]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
