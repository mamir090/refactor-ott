import { Component, OnInit } from '@angular/core';
import {FieldType} from "@ngx-formly/core";

@Component({
  selector: 'refactor-ott-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent extends FieldType implements OnInit  {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
