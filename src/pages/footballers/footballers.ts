import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the FootballersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-footballers',
  templateUrl: 'footballers.html',
})
export class FootballersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert1() {
  	let alert = this.alertCtrl.create({
  		title: "David Beckham",
  		subTitle: "Played for England, Manchester United and Real Madrid.",
  		buttons: ["Okay"]
  	});
  	alert.present();
  }
  showAlert2() {
  	let alert = this.alertCtrl.create({
  		title: "Lionel Messi",
  		subTitle: "Played for Argentina and Barcelona.",
  		buttons: ["Okay"]
  	});
  	alert.present();
  }
  showAlert3() {
  	let alert = this.alertCtrl.create({
  		title: "Zinedane Zidane",
  		subTitle: "Played for France and Real Madrid.",
  		buttons: ["Okay"]
  	});
  	alert.present();
  }
  showAlert4() {
  	let alert = this.alertCtrl.create({
  		title: "Ronaldinho",
  		subTitle: "Played for Brazil, AC Milan and Barcelona.",
  		buttons: ["Okay"]
  	});
  	alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FootballersPage');
  }

}
