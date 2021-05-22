import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencias-tecnicas',
  templateUrl: './asistencias-tecnicas.component.html',
  styleUrls: ['./asistencias-tecnicas.component.scss']
})
export class AsistenciasTecnicasComponent implements OnInit {

  title = 'ASISTENCIAS TÉCNICAS A ENTIDADES TERRITORIALES PARA ACTUALIZAR O FORMULAR SUS PLANES DE CONTINGENCIA';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
