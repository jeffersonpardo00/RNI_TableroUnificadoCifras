import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prevencion',
  templateUrl: './prevencion.component.html',
  styleUrls: ['./prevencion.component.scss']
})
export class PrevencionComponent implements OnInit {

  title = 'PREVENCIÓN';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
