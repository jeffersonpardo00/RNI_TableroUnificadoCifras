import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros-regionales',
  templateUrl: './centros-regionales.component.html',
  styleUrls: ['./centros-regionales.component.scss']
})
export class CentrosRegionalesComponent implements OnInit {

  title = 'CENTROS REGIONALES EN FUNCIONAMIENTO Y EN CONSTRUCCIÓN';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
