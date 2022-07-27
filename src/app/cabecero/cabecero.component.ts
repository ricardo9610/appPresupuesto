import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() presupuestoTotal:number;
  @Input() ingresosTotal:number;
  @Input() egresosTotal:number;
  @Input() porcentajeTotal:number;
  

}
