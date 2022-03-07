import { Component, OnInit } from '@angular/core';
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'refactor-ott-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent extends FieldWrapper implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
