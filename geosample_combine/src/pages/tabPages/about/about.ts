import { Test1Page } from './../../test1/test1';
import { ContactPage } from './../contact/contact';
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
    this.navCtrl.push('Test1Page');
  }

}
