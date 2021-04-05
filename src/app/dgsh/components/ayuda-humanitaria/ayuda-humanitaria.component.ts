import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda-humanitaria',
  templateUrl: './ayuda-humanitaria.component.html',
  styleUrls: ['./ayuda-humanitaria.component.scss']
})
export class AyudaHumanitariaComponent implements OnInit {

  title = 'AYUDA HUMANITARIA';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
