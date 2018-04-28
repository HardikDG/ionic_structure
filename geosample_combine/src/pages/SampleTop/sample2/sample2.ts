import { Sample3Page } from './../sample3/sample3';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sample2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sample2',
  templateUrl: 'sample2.html',
})
export class Sample2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sample2Page');
  }

  navigate() {
    this.navCtrl.push('Sample3Page');
  }

}
