import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  title = 'DIRECCIÓN DE ASUNTOS ÉTNICOS';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
