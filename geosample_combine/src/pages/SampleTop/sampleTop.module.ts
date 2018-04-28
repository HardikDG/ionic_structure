import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sample4Page } from './sample4/sample4';
import { Sample3Page } from './sample3/sample3';
import { Sample2Page } from './sample2/sample2';
import { Sample1Page } from './sample1/sample1';
import { SamplePage } from './sample/sample';

@NgModule({
  declarations: [
    SamplePage,Sample1Page,Sample2Page,Sample3Page,Sample4Page
  ],
  imports: [
    IonicPageModule.forChild(SamplePage),
    IonicPageModule.forChild(Sample1Page),
    IonicPageModule.forChild(Sample2Page),
    IonicPageModule.forChild(Sample3Page),
    IonicPageModule.forChild(Sample4Page),
  ],
  entryComponents: [
      SamplePage,Sample1Page
  ],exports:[Sample1Page,SamplePage]
})
export class SamplePageModule {}
