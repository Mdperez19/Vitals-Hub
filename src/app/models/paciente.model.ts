export class Paciente {

    nombre: string="";
    nss:string="";
    edad:number=0;
    correo:string="";
    sexo:string="";
    fecha_nacimiento:string="";
    alergias:string[]=[];
    diagnostico:string="";
    telefono:string="";
    nombre_familiar="";
    telefono_familiar="";


  constructor(
    nombre: string, 
    nss: string, 
    edad: number, 
    correo: string, 
    sexo: string, 
    fecha_nacimiento: string, 
    alergias: string[], 
    diagnostico: string, 
    telefono: string
) {
    this.nombre = nombre
    this.nss = nss
    this.edad = edad
    this.correo = correo
    this.sexo = sexo
    this.fecha_nacimiento = fecha_nacimiento
    this.alergias = alergias
    this.diagnostico = diagnostico
    this.telefono = telefono
  }

    
}
