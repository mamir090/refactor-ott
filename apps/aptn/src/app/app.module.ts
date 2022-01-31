import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderModule} from "@refactor-ott/loader";
import {LoginConfig, RoutesGenerator} from "@refactor-ott/env";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutesGenerator.generateRouterModule({
      login: {module: import("@refactor-ott/screens/login/login-alpha").then(m => m.LoginAlphaScreenComponentModule)}
    }),
    LoaderModule
  ],
  providers: [
    // {
    //   provide: LoginConfig,
    //   useClass: CaracolLoginConfig
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


