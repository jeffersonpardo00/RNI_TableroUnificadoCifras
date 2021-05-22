import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-proy-ofertados',
  templateUrl: './info-proy-ofertados.component.html',
  styleUrls: ['./info-proy-ofertados.component.scss']
})
export class InfoProyOfertadosComponent implements OnInit {
  title = 'INFORMACIÓN DE PROYECTOS OFERTADOS POR LA UNIDAD';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
