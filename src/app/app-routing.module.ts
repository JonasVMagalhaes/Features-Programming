import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CssComponent } from './pages/css/css.component';
import { HomeComponent } from './pages/home/home.component';
import { DivComponent } from './pages/css/components/div/div.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "css",
    component: CssComponent,
    children: [
      { path: "", component: DivComponent }
    ]
  },

  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
