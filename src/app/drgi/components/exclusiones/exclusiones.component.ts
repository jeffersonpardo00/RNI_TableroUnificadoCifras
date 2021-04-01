import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusiones',
  templateUrl: './exclusiones.component.html',
  styleUrls: ['./exclusiones.component.scss']
})
export class ExclusionesComponent implements OnInit {

  title = 'EXCLUSIONES';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
