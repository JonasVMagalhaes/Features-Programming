import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  items: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Div'
      },
      {
        label: 'Texto'
      }
    ];
  }
}
