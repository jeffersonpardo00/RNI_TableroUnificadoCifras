import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-gestion-proyectos',
  templateUrl: './grupo-gestion-proyectos.component.html',
  styleUrls: ['./grupo-gestion-proyectos.component.scss']
})
export class GrupoGestionProyectosComponent implements OnInit {

  title = 'GRUPO DE GESTIÓN DE PROYECTOS DGI';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
