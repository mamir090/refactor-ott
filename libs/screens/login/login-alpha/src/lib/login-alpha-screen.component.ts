import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'refactor-ott-login-alpha-screen',
  templateUrl: './login-alpha-screen.component.html',
  styleUrls: ['./login-alpha-screen.component.scss'],
})
export class LoginAlphaScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
  exports: [LoginAlphaScreenComponent],
  bootstrap: [LoginAlphaScreenComponent]
})
export class LoginAlphaScreenComponentModule {}
