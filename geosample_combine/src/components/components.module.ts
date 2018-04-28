import { NgModule } from '@angular/core';
import { TestComponent } from './test/test';
import { Test1Component } from './test1/test1';
@NgModule({
	declarations: [TestComponent,
    Test1Component],
	imports: [],
	exports: [TestComponent,
    Test1Component]
})
export class ComponentsModule {}
