import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas-satisfaccion',
  templateUrl: './medidas-satisfaccion.component.html',
  styleUrls: ['./medidas-satisfaccion.component.scss']
})
export class MedidasSatisfaccionComponent implements OnInit {

  title = 'MEDIDAS DE SATISFACCIÓN';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
