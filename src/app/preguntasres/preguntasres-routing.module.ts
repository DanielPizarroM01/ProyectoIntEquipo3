import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasresPage } from './preguntasres.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasresPageRoutingModule {}
