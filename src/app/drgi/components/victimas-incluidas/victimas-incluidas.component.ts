import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-victimas-incluidas',
  templateUrl: './victimas-incluidas.component.html',
  styleUrls: ['./victimas-incluidas.component.scss']
})
export class VictimasIncluidasComponent implements OnInit {

  title = 'VÍCTIMAS INCLUIDAS';
  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {
  }

}
