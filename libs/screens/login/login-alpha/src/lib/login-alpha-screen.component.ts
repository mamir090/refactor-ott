import {
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginAlphaConfig} from "./config";
import {ModuleWithConfig} from "@refactor-ott/config/app-router";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FormlyFieldConfig, FormlyModule} from "@ngx-formly/core";




@Component({
  selector: 'refactor-ott-login-alpha-screen',
  templateUrl: './login-alpha-screen.component.html',
  styleUrls: ['./login-alpha-screen.component.scss'],
})
export class LoginAlphaScreenComponent implements OnInit {
  isShow = false
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'agreement',
      type: 'checkbox',
      templateOptions: { label: 'agree?' },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
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
    }]),
    ReactiveFormsModule,
    FormlyModule
  ],
  declarations: [LoginAlphaScreenComponent],
  providers: [{
    provide: LoginAlphaConfig,
    useFactory: () => LoginAlphaScreenComponentModule.config,
  }],
  exports: [LoginAlphaScreenComponent],
})

export class LoginAlphaScreenComponentModule extends ModuleWithConfig{
  static withConfig = LoginAlphaScreenComponentModule.factory<LoginAlphaConfig>()
}


