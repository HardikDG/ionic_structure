import { Test1Page } from './../test1/test1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'SamplePage',
  segment: 'Sample',
  defaultHistory: ['AboutPage']
})
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',
})
export class SamplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Loaded");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplePage');
  }

  navigate() {
    this.navCtrl.push('Test1Page');
  }
}

