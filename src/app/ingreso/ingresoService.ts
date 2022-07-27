import { Ingreso } from "./ingreso.model";

export class IngresoService{

    ingresos:Ingreso[]=[
       
        new Ingreso('salario',500),
        new Ingreso('venta coche', 3500),
        
        
    ];

    agregarIngreso(ingreso:Ingreso){
        this.ingresos.push(ingreso);
    }

    eliminar(ingreso:Ingreso){
        let indice = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
    
}