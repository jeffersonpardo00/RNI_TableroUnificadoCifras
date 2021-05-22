import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participacion',
  templateUrl: './participacion.component.html',
  styleUrls: ['./participacion.component.scss']
})
export class ParticipacionComponent implements OnInit {

  title = 'PARTICIPACIÓN';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
