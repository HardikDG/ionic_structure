import { SamplePage } from './../sample/sample';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {
    this.navCtrl.push('SamplePage');
  }

}
