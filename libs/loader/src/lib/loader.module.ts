import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import {RoutesGenerator, RoutingSchema} from "@refactor-ott/env";



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppLoaderComponent
  ],

  exports: [
    AppLoaderComponent
  ]
})
export class LoaderModule {
  static forRoot(): ModuleWithProviders<LoaderModule> {

    return {
      ngModule: LoaderModule,
      providers: [

      ],
    };
  }
}



