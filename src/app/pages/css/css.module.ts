import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { PrimeNgModule } from 'src/app/modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    CssComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    PrimeNgModule
  ],
  exports: [
    CssComponent
  ]
})
export class CssModule { }
