import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colectivos',
  templateUrl: './colectivos.component.html',
  styleUrls: ['./colectivos.component.scss']
})
export class ColectivosComponent implements OnInit {

  title = 'COLECTIVOS';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
