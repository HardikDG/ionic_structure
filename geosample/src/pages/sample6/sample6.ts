import { Sample7Page } from './../sample7/sample7';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sample6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({priority: 'off'})
@Component({
  selector: 'page-sample6',
  templateUrl: 'sample6.html',
})
export class Sample6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sample6Page');
  }

  navigate() {
    this.navCtrl.push('Sample7Page');
  }

}
