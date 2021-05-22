import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-humanitaria',
  templateUrl: './asistencia-humanitaria.component.html',
  styleUrls: ['./asistencia-humanitaria.component.scss']
})
export class AsistenciaHumanitariaComponent implements OnInit {

  panelOpenState = false;
  title = 'ASISTENCIA HUMANITARIA';

  constructor() { }

  ngOnInit(): void {
  }

}
