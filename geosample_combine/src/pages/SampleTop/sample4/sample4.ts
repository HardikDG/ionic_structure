import { Sample5Page } from './../../sample5/sample5';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sample4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sample4',
  templateUrl: 'sample4.html',
})
export class Sample4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sample4Page');
  }

  navigate() {
    this.navCtrl.push('Sample5Page');
  }

}
