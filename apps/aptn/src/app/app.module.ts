import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ShellModule} from "@refactor-ott/shell";
import {RoutesGenerator} from "@refactor-ott/config/app-router";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutesGenerator.generateRouterModule({
      login: {module: import("@refactor-ott/screens/login/login-alpha")
          .then(m => m.LoginAlphaScreenComponentModule.withConfig({backgroundColor: 'blue'}))}
    }),
    ShellModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


