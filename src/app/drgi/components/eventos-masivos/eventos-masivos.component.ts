import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-masivos',
  templateUrl: './eventos-masivos.component.html',
  styleUrls: ['./eventos-masivos.component.scss']
})
export class EventosMasivosComponent implements OnInit {

  title = 'EVENTOS TIPO MASIVO';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
