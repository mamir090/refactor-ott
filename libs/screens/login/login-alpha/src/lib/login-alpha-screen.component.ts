import {
  Component,
  OnInit,
  NgModule,
  ModuleWithProviders,
  createNgModuleRef,
  Injector,
  NgModuleRef, Injectable
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LazyLoadedModule, LoginConfig} from '@refactor-ott/env'



@Injectable({
  providedIn: 'root'
})
export class LoginAlphaConfig extends LoginConfig {
  backgroundColor: string = "red"
}


@Component({
  selector: 'refactor-ott-login-alpha-screen',
  templateUrl: './login-alpha-screen.component.html',
  styleUrls: ['./login-alpha-screen.component.scss'],
})
export class LoginAlphaScreenComponent implements OnInit {
  // constructor(public config:LoginAlphaConfig ) {}

  ngOnInit(): void {
    // console.warn(this.config)
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
    provide:LoginAlphaConfig,
    useExisting: LoginConfig
  }],
  exports: [LoginAlphaScreenComponent],
})
export class LoginAlphaScreenComponentModule {

}

export const LoginAlphaLoader: LazyLoadedModule = {
  module: import("@refactor-ott/screens/login/login-alpha").then(m => m.LoginAlphaScreenComponentModule),
}
