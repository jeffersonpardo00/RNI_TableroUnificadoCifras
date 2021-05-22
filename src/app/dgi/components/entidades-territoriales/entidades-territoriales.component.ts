import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entidades-territoriales',
  templateUrl: './entidades-territoriales.component.html',
  styleUrls: ['./entidades-territoriales.component.scss']
})
export class EntidadesTerritorialesComponent implements OnInit {

  title = 'ENTIDADES TERRITORIALES CERTIFICADAS';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
