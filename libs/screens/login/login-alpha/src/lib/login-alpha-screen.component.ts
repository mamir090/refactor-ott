import {
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginAlphaConfig} from "./config";
import {ModuleWithConfig} from "@refactor-ott/config/app-router";




@Component({
  selector: 'refactor-ott-login-alpha-screen',
  templateUrl: './login-alpha-screen.component.html',
  styleUrls: ['./login-alpha-screen.component.scss'],
})
export class LoginAlphaScreenComponent implements OnInit {
  constructor(public config: LoginAlphaConfig) {
  }

  ngOnInit(): void {
    console.warn(this.config)
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      component: LoginAlphaScreenComponent
    }])
  ],
  declarations: [LoginAlphaScreenComponent],
  providers: [{
    provide: LoginAlphaConfig,
    useFactory: () => LoginAlphaScreenComponentModule.config,
    // useValue: LoginAlphaScreenComponentModule.config,
  }],
  exports: [LoginAlphaScreenComponent],
})

export class LoginAlphaScreenComponentModule extends ModuleWithConfig{
  static withConfig = LoginAlphaScreenComponentModule.factory<LoginAlphaConfig>()
}


