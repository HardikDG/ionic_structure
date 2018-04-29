import { SamplePage } from './../sample/sample';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {
    this.navCtrl.push('SamplePage');
  }

}
