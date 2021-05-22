import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-ciudadano',
  templateUrl: './servicio-ciudadano.component.html',
  styleUrls: ['./servicio-ciudadano.component.scss']
})
export class ServicioCiudadanoComponent implements OnInit {

  panelOpenState = false;
  title = 'SERVICIO AL CIUDADANO';
  constructor() { }

  ngOnInit(): void {
  }

}
