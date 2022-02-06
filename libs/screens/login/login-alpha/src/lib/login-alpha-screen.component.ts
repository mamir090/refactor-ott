import {
  Component,
  OnInit,
  NgModule,
  ModuleWithProviders,
  createNgModuleRef,
  Injector,
  NgModuleRef, Injectable, Type
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LazyLoadedModule, LazyLoadedModuleWithConfig, LoginConfig} from '@refactor-ott/env'


export class LoginAlphaConfig extends LoginConfig {
  backgroundColor: string = "red"
}


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

export class LoginAlphaScreenComponentModule extends LazyLoadedModuleWithConfig{
  static withConfig = LoginAlphaScreenComponentModule.factory<LoginAlphaConfig>()
}


