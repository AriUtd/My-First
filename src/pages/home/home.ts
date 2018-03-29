import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { RegisterPage } from '../register/register';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor( private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  alert(message: String) {
    this.alertCtrl.create({
      title: "Welcome",
      buttons: ['OK']
    }).present();
  }

  registerPage() {
    this.navCtrl.push(RegisterPage);
  }

  loginUser() {
    this.afAuth.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log("logged in", this.afAuth.auth.currentUser);
      this.alert("Success");
      this.navCtrl.push(FirstPage);
    })
    .catch(error => {
      console.log("error logging in", error);
    })
  }

}
