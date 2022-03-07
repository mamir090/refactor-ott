import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import {RouterModule} from "@angular/router";
import {HeaderComponentModule} from "@refactor-ott/ui/header";
import {ShellConfig} from "./shell/shell-config";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponentModule
    ],
  declarations: [
    ShellComponent
  ],
  exports: [ShellComponent]
})
export class ShellModule {

  static forRoot(config: ShellConfig): ModuleWithProviders<ShellModule> {
    return {
      ngModule: ShellModule,
      providers: [
        {provide: ShellConfig, useValue: config }
      ]
    };
  }
}
