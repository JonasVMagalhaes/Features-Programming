import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivComponent } from './div.component';

import { PrimeNgModule } from 'src/app/modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    DivComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    DivComponent
  ]
})
export class DivModule { }
