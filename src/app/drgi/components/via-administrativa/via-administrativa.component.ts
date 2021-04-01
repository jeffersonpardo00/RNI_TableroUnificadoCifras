import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-via-administrativa',
  templateUrl: './via-administrativa.component.html',
  styleUrls: ['./via-administrativa.component.scss']
})
export class ViaAdministrativaComponent implements OnInit {

  title = 'VIA ADMINISTRATIVA';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
