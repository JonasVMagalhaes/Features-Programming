import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { SliderModule } from 'primeng/slider';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    MenubarModule,
    SliderModule,
    ToolbarModule
  ],
  exports: [
    CardModule,
    MenubarModule,
    SliderModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
