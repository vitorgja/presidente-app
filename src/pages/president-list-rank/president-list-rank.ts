import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PresidentListRankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-president-list-rank',
  templateUrl: 'president-list-rank.html',
})
export class PresidentListRankPage {
  presidents = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.presidents = [
      {name: "Foo A", photo: "https://fakeimg.pl/100x100/?retina=5&text=A&font=noto", votos: 40.05, action: "good"},
      {name: "Foo B", photo: "https://fakeimg.pl/100x100/?retina=5&text=B&font=noto", votos: 19.95, action: "regular"},
      {name: "Foo C", photo: "https://fakeimg.pl/100x100/?retina=5&text=C&font=noto", votos: 25.00, action: "good"},
      {name: "Foo D", photo: "https://fakeimg.pl/100x100/?retina=5&text=D&font=noto", votos: 15.00, action: "bad"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresidentListRankPage');
  }

}
