import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  title = 'GRUPO DE ATENCIÓN A VÍCTIMAS EN EL EXTERIOR';

  constructor() { }

  ngOnInit(): void {
  }

}
