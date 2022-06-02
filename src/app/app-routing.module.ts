import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ListapacientesComponent } from './components/principal/listapacientes/listapacientes.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SignosvitalesComponent } from './components/principal/signosvitales/signosvitales.component';
import { LoginComponent } from './components/sesion/login/login.component';
import { SesionComponent } from './components/sesion/sesion.component';

const routes: Routes = [
  {path:'',component:SesionComponent},
  {path:'Sesion',component:SesionComponent},
  {path:'Principal',component:PrincipalComponent,children:[
    {path:'SignosVitales',component:SignosvitalesComponent},
    {path:'Pacientes',component:ListapacientesComponent}
  ]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
