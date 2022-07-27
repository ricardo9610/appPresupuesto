import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egresoService';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingresoService';

@Component({
  selector: 'app-fromulario',
  templateUrl: './fromulario.component.html',
  styleUrls: ['./fromulario.component.css'],
})
export class FromularioComponent implements OnInit {
  tipo: String = 'ingresoOpcion';
  descripcionInput: String;
  valorInput: number;
  

  constructor(
    private egresoService: EgresoService,
    private ingresoService: IngresoService
  ) {}

  ngOnInit(): void {}

  tipoOperancion(evento) {
    this.tipo = evento.target.value;
  }

  agregarDato() {
    if (this.tipo === 'ingresoOpcion') {
      this.ingresoService.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    } else
      this.egresoService.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
  }
}
