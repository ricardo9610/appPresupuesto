import { Egreso } from "./egreso.model";

export class EgresoService{

    egresos:Egreso[]=[
        new Egreso('ropa', 300),
        new Egreso('renta',500)
    ];

    agregarEgreso(egreso:Egreso){
        this.egresos.push(egreso);
    }

    eliminar(egreso:Egreso){
        let indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1 );
    }

    

}