import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursos-tramitados',
  templateUrl: './recursos-tramitados.component.html',
  styleUrls: ['./recursos-tramitados.component.scss']
})
export class RecursosTramitadosComponent implements OnInit {

  title = 'NÚMERO DE RECURSOS TRAMITADOS';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
