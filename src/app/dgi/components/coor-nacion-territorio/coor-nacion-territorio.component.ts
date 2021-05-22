import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coor-nacion-territorio',
  templateUrl: './coor-nacion-territorio.component.html',
  styleUrls: ['./coor-nacion-territorio.component.scss']
})
export class CoorNacionTerritorioComponent implements OnInit {
  title = 'COORDINACIÓN NACIÓN-TERRITORIO';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
