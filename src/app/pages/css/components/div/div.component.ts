import { Component, OnInit } from '@angular/core';

import { DivExample } from 'src/app/interfaces/div-example';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivComponent implements OnInit {

  public div: DivExample = {
    backgroundColor: "red",
    height: 50,
    width: 50,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
