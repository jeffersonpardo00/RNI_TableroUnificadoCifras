import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fondo-reparacion',
  templateUrl: './fondo-reparacion.component.html',
  styleUrls: ['./fondo-reparacion.component.scss']
})
export class FondoReparacionComponent implements OnInit {

  title = 'FONDO DE REPARACIÓN';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
