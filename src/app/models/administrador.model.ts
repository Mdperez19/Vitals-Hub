export class Administrador {
    nombre:string="";
    correo:string="";
    contrasena:string="";
    telefono:string="";


  constructor(
    nombre: string, 
    correo: string, 
    contrasena: string, 
    telefono: string
) {
    this.nombre = nombre
    this.correo = correo
    this.contrasena = contrasena
    this.telefono = telefono
  }

}
