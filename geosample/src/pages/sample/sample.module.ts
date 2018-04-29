import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule } from 'ionic-angular';
import { SamplePage } from './sample';

@NgModule({
  declarations: [
    SamplePage,
  ],
  imports: [
    IonicPageModule.forChild(SamplePage),
  ],
})
export class SamplePageModule {}
