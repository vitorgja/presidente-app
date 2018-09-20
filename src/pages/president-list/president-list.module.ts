import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresidentListPage } from './president-list';

@NgModule({
  declarations: [
    PresidentListPage,
  ],
  imports: [
    IonicPageModule.forChild(PresidentListPage),
  ],
})
export class LoginPageModule {}
