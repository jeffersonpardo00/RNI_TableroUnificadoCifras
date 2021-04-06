import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snariv',
  templateUrl: './snariv.component.html',
  styleUrls: ['./snariv.component.scss']
})
export class SnarivComponent implements OnInit {

  title = 'SNARIV';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
