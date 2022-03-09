import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ShellModule} from "@refactor-ott/shell";
import {RoutesGenerator} from "@refactor-ott/config/app-router";
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormInputComponent} from "../../../../libs/ui/common/src/lib/input/form-input.component";
// @ts-ignore
import {UiCommonModule} from "@refactor-ott/ui/common";
import {InputWrapperComponent} from "../../../../libs/ui/common/src/lib/input-wrapper/input-wrapper.component";
import {CheckboxWrapperComponent} from "../../../../libs/ui/common/src/lib/checkbox-wrapper/checkbox-wrapper.component";
import {CheckboxComponent} from "../../../../libs/ui/common/src/lib/checkbox/checkbox.component";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiCommonModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormInputComponent ,wrappers: ['input-wrapper']},
        { name: 'checkbox', component: CheckboxComponent ,wrappers: ['checkbox-wrapper']},
      ],
      wrappers: [
        { name: 'input-wrapper', component: InputWrapperComponent },
        { name: 'checkbox-wrapper', component: CheckboxWrapperComponent },
      ],
    }),
    RoutesGenerator.generateRouterModulePure([
      {path: 'login', loadChildren: ()=> import("@refactor-ott/screens/login/login-alpha")
          .then(m => m.LoginAlphaScreenComponentModule.withConfig({backgroundColor: 'blue'})) },
      { path: '',   redirectTo: '/login', pathMatch: 'full' },
    ]),
    ShellModule.forRoot({
      headerConfig: {
        showSignUp: false
      }
    }),
    HttpClientModule,
    TranslocoRootModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}


