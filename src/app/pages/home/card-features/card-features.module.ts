import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardFeaturesComponent } from './card-features.component';

import { PrimeNgModule } from 'src/app/modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    CardFeaturesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CardFeaturesComponent
  ]
})
export class CardFeaturesModule { }
