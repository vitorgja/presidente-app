import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

/* App Pages */
import { AutenticacaoPage } from '../pages/autenticacao/autenticacao';
import { PresidentListPage } from '../pages/president-list/president-list';
import { PresidentListRankPage } from '../pages/president-list-rank/president-list-rank';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PresidentProvider } from '../providers/president/president';

// Integração FB
import { Facebook } from '@ionic-native/facebook';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AutenticacaoPage,
    PresidentListPage,
    PresidentListRankPage,

    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDqVw26R3yLgXn123WQy-Nr3FVMeiZEojs",
      authDomain: "president-app-774ab.firebaseapp.com",
      databaseURL: "https://president-app-774ab.firebaseio.com",
      projectId: "president-app-774ab",
      storageBucket: "president-app-774ab.appspot.com",
      messagingSenderId: "792581782345"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AutenticacaoPage,
    PresidentListPage,
    PresidentListRankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    PresidentProvider
  ]
})
export class AppModule {}
