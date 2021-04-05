import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas-satis-rehab',
  templateUrl: './medidas-satis-rehab.component.html',
  styleUrls: ['./medidas-satis-rehab.component.scss']
})
export class MedidasSatisRehabComponent implements OnInit {

  title = 'MEDIDAS DE SATISFACCIÓN Y REHABILITACIÓN';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
