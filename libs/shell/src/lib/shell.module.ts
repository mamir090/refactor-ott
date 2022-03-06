import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import {RouterModule} from "@angular/router";
import {HeaderComponentModule} from "@refactor-ott/ui/header";

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
export class ShellModule {}
