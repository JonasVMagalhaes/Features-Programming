import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { CardFeaturesModule } from 'src/app/pages/home/card-features/card-features.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardFeaturesModule,
    HeaderModule
  ]
})
export class HomeModule { }
