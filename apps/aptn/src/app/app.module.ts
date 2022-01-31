import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderModule} from "@refactor-ott/loader";
import {RoutesGenerator} from "@refactor-ott/env";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutesGenerator.generateRouterModule({
      login: import("@refactor-ott/screens/login/login-alpha").then(m => m.LoginAlphaScreenComponentModule)
    }),
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


