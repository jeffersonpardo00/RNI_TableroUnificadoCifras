import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesiones-seguimiento',
  templateUrl: './sesiones-seguimiento.component.html',
  styleUrls: ['./sesiones-seguimiento.component.scss']
})
export class SesionesSeguimientoComponent implements OnInit {

  title = 'SESIONES DE SEGUIMIENTO - ALERTAS TEMPRANAS';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
