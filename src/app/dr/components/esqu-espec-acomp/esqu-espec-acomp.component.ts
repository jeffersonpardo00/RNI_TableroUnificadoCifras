import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esqu-espec-acomp',
  templateUrl: './esqu-espec-acomp.component.html',
  styleUrls: ['./esqu-espec-acomp.component.scss']
})
export class EsquEspecAcompComponent implements OnInit {

  title = 'ESQUEMAS ESPECIALES DE ACOMPAMIENTO';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
