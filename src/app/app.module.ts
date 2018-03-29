import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FootballersPage } from '../pages/footballers/footballers';
import { ClubPage } from '../pages/club/club';
import { OldTraffordPage } from '../pages/old-trafford/old-trafford';
import { FirstPage } from '../pages/first/first';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



const firebase = {
  apiKey: "AIzaSyBhtaEbahgqwF0UGGfmgBcAuwNCsIldMLg",
  authDomain: "simple-1995.firebaseapp.com",
  databaseURL: "https://simple-1995.firebaseio.com",
  projectId: "simple-1995",
  storageBucket: "simple-1995.appspot.com",
  messagingSenderId: "882829120280"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FootballersPage,
    ClubPage,
    OldTraffordPage,
    FirstPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FootballersPage,
    ClubPage,
    OldTraffordPage,
    FirstPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
