import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoaderModule} from "@refactor-ott/loader";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoaderModule.forRoot({
      login: import("@refactor-ott/screens/login/login-alpha").then(m => m.LoginAlphaScreenComponentModule)
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


