import { Sample2Page } from './../sample2/sample2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sample1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sample1',
  templateUrl: 'sample1.html',
})
export class Sample1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sample1Page');
  }

  navigate() {
    this.navCtrl.push('Sample2Page');
  }

}
