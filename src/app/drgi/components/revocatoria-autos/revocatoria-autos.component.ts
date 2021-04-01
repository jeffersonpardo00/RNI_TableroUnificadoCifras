import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revocatoria-autos',
  templateUrl: './revocatoria-autos.component.html',
  styleUrls: ['./revocatoria-autos.component.scss']
})
export class RevocatoriaAutosComponent implements OnInit {

  title = ' NÚMERO DE REVOCATORIAS EN RESPUESTA A AUTOS DE LA CORTE CONSTITUCIONAL';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
