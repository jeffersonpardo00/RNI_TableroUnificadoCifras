import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-victimas-superaron-sv',
  templateUrl: './victimas-superaron-sv.component.html',
  styleUrls: ['./victimas-superaron-sv.component.scss']
})
export class VictimasSuperaronSVComponent implements OnInit {

  title = 'VÍCTIMAS QUE HAN SUPERADO LA SITUACIÓN DE VULNERABILIDAD';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
