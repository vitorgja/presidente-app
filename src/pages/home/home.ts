import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { PresidentListPage } from '../president-list/president-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  goToPresidentListPage() {
    this.navCtrl.push(PresidentListPage);
  }
  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }
  

}
