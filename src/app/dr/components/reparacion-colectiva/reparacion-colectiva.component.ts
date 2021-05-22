import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reparacion-colectiva',
  templateUrl: './reparacion-colectiva.component.html',
  styleUrls: ['./reparacion-colectiva.component.scss']
})
export class ReparacionColectivaComponent implements OnInit {

  title = 'REPARACIÓN COLECTIVA';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
