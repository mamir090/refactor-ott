import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import {generateRoutes, getAppRoutes, RoutingSchema} from "@refactor-ott/env";





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(getAppRoutes())
  ],
  declarations: [
    AppLoaderComponent
  ],

  exports: [
    AppLoaderComponent
  ]
})
export class LoaderModule {
  static forRoot(schema: RoutingSchema): ModuleWithProviders<LoaderModule> {
    generateRoutes(schema)
    return {
      ngModule: LoaderModule
    };
  }
}
