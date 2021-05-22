import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sol-acceso-oferta',
  templateUrl: './sol-acceso-oferta.component.html',
  styleUrls: ['./sol-acceso-oferta.component.scss']
})
export class SolAccesoOfertaComponent implements OnInit {

  title = 'SOLICITUDES DE ACCESO A OFERTA';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
