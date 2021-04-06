import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-acceso-efectivo',
  templateUrl: './balance-acceso-efectivo.component.html',
  styleUrls: ['./balance-acceso-efectivo.component.scss']
})
export class BalanceAccesoEfectivoComponent implements OnInit {

  title = 'BALANCE DE ACCESO EFECTIVO DE LAS VÍCTIMAS A LA OFERTA';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
