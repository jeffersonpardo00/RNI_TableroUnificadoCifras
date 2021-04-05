import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atencion-inmediatez',
  templateUrl: './atencion-inmediatez.component.html',
  styleUrls: ['./atencion-inmediatez.component.scss']
})
export class AtencionInmediatezComponent implements OnInit {

  title = 'ATENCIÓN EN LA INMEDIATEZ';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
