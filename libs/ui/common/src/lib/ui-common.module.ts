import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './input/form-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';

import { CheckboxWrapperComponent } from './checkbox-wrapper/checkbox-wrapper.component';
import {CheckboxComponent} from "./checkbox/checkbox.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
  ],
  declarations: [
    FormInputComponent,
    InputWrapperComponent,
    CheckboxComponent,
    CheckboxWrapperComponent
  ],
})
export class UiCommonModule {}
