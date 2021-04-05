import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reparacion-individual',
  templateUrl: './reparacion-individual.component.html',
  styleUrls: ['./reparacion-individual.component.scss']
})
export class ReparacionIndividualComponent implements OnInit {

  title = 'REPARACIÓN INDIVIDUAL (INDEMNIZACIÓN)';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
