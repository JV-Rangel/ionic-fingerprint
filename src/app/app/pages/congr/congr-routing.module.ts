import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongrPage } from './congr.page';

const routes: Routes = [
  {
    path: '',
    component: CongrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongrPageRoutingModule {}
