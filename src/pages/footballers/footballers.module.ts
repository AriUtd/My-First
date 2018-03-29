import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FootballersPage } from './footballers';

@NgModule({
  declarations: [
    FootballersPage,
  ],
  imports: [
    IonicPageModule.forChild(FootballersPage),
  ],
})
export class FootballersPageModule {}
