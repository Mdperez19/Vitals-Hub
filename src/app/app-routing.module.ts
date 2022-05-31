import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sesion/login/login.component';
import { SesionComponent } from './components/sesion/sesion.component';

const routes: Routes = [
  {path:'',component:SesionComponent},
  {path:'Sesion',component:SesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
