import {Component, OnInit, NgModule, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderConfig} from "./header-config";



@Component({
  selector: 'refactor-ott-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input() config = new HeaderConfig()

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderComponentModule{}
