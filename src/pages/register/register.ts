import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: String) {
    this.alertCtrl.create({
      title: "Thank You for Registering",
      subTitle: "You can now go back and Sign In",
      buttons: ['OK']
    }).present();
  }

  registerUser() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log("success", data);
      this.alert("Success");
    })
    .catch(error => {
      console.log("error", error);
    })
  }

}
