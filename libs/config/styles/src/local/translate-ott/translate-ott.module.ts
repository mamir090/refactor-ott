import {Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransTypeDirective } from './trans-type.directive';



@NgModule({
  declarations: [
    TransTypeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TransTypeDirective
  ]
})
export class TranslateOttModule {
  static injector: Injector;
  constructor(private injector: Injector){
    TranslateOttModule.injector = this.injector;
  }
}
