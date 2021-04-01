import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {

  title = 'NOVEDAD';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}