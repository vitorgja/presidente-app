import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresidentListRankPage } from './president-list-rank';

@NgModule({
  declarations: [
    PresidentListRankPage,
  ],
  imports: [
    IonicPageModule.forChild(PresidentListRankPage),
  ],
})
export class PresidentListRankPageModule {}
