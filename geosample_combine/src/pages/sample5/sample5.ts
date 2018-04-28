import { Sample9Page } from './../sample9/sample9';
import { Sample10Page } from './../sample10/sample10';
import { Sample8Page } from './../sample8/sample8';
import { Sample7Page } from './../sample7/sample7';
import { Sample6Page } from './../sample6/sample6';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sample5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({priority: 'off'})
@Component({
  selector: 'page-sample5',
  templateUrl: 'sample5.html',
})
export class Sample5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sample5Page');
  }
  
  navigate() {
    this.navCtrl.push('Sample6Page');
  }

  navigate1() {
    this.navCtrl.push('Sample7Page');
  }

  navigate2() {
    this.navCtrl.push('Sample8Page');
  }

  navigate3() {
    this.navCtrl.push('Sample9Page');
  }

  navigate4() {
    this.navCtrl.push('Sample10Page');
  }

}
