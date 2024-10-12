import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntasresPageRoutingModule } from './preguntasres-routing.module';

import { PreguntasresPage } from './preguntasres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntasresPageRoutingModule
  ],
  declarations: [PreguntasresPage]
})
export class PreguntasresPageModule {}
