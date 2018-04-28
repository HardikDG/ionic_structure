
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact/contact';
import { AboutPage } from './about/about';

@NgModule({
  declarations: [
    AboutPage,ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    IonicPageModule.forChild(AboutPage),
  ],
})
export class TabsPageModule {}
