import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OldTraffordPage } from '../old-trafford/old-trafford';

/**
 * Generated class for the ClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-club',
  templateUrl: 'club.html',
})
export class ClubPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  otpage() {
  this.navCtrl.push(OldTraffordPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubPage');
  }

}
