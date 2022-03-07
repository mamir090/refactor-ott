import { Component, OnInit } from '@angular/core';
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'refactor-ott-checkbox-wrapper',
  templateUrl: './checkbox-wrapper.component.html',
  styleUrls: ['./checkbox-wrapper.component.scss']
})
export class CheckboxWrapperComponent extends FieldWrapper implements OnInit {



  ngOnInit(): void {
  }

}
