import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  title = 'INDIVIDUAL';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
