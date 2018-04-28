import { Sample4Page } from './../sample4/sample4';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sample3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample3',
  templateUrl: 'sample3.html',
})
export class Sample3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sample3Page');
  }

  navigate() {
    this.navCtrl.push('Sample4Page');
  }

}
