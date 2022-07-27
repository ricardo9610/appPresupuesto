import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egresoService';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingresoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'presupuesto-app';
  
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private egresoservice: EgresoService,
    private ingresoService: IngresoService
  ) {
    this.ingresos = ingresoService.ingresos;
    this.egresos = egresoservice.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso=>{
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
   return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
