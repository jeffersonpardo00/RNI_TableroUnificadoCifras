import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-interinstitucional',
  templateUrl: './gestion-interinstitucional.component.html',
  styleUrls: ['./gestion-interinstitucional.component.scss']
})
export class GestionInterinstitucionalComponent implements OnInit {

  title = 'GESTIÓN INTERINSTITUCIONAL';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
