export class Paciente {

    nombre: string="";
    nss:string="";
    edad:number=0;
    correo:string="";
    sexo:string="";
    fecha_nacimiento:string="";
    telefono:string="";
    nombre_familiar:string="";
    telefono_familiar:string="";

    
    diagnostico:string="";
    antecedentes_heredofamiliares:string[]=[];
    antecedentes_nopatologicos:string[]=[];
    antecedentes_patologicos:string[]=[];
    fecha_ingreso:string="";
    grupo_sanguineo:string="";
    num_cama:number=0;
    
    temperatura:number=0;
    spO2:number=0;
    ppm:number=0;


  constructor(
    nombre: string, 
    nss: string, 
    edad: number, 
    correo: string, 
    sexo: string, 
    fecha_nacimiento: string, 
    telefono: string, 
    nombre_familiar: string, 
    telefono_familiar: string, 
    diagnostico: string, 
    antecedentes_heredofamiliares: string[], 
    antecedentes_nopatologicos: string[], 
    antecedentes_patologicos: string[], 
    fecha_ingreso: string, 
    grupo_sanguineo: string, 
    num_cama: number
) {
    this.nombre = nombre
    this.nss = nss
    this.edad = edad
    this.correo = correo
    this.sexo = sexo
    this.fecha_nacimiento = fecha_nacimiento
    this.telefono = telefono
    this.nombre_familiar = nombre_familiar
    this.telefono_familiar = telefono_familiar
    this.diagnostico = diagnostico
    this.antecedentes_heredofamiliares = antecedentes_heredofamiliares
    this.antecedentes_nopatologicos = antecedentes_nopatologicos
    this.antecedentes_patologicos = antecedentes_patologicos
    this.fecha_ingreso = fecha_ingreso
    this.grupo_sanguineo = grupo_sanguineo
    this.num_cama = num_cama
  }
  


    
    
	
    
}
