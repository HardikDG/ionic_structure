import { SamplePageModule } from './../SampleTop/sampleTop.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Test1Page } from './test1';

@NgModule({
  declarations: [
    Test1Page,
  ],
  imports: [
    SamplePageModule,
    IonicPageModule.forChild(Test1Page)
  ],
})
export class Test1PageModule {}
