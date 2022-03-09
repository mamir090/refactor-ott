import { Component } from '@angular/core';
import {Translations} from "./local/def";


@Component({
  selector: 'refactor-ott-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aptn';
  constructor(public t: Translations) {
    console.warn(t)
  }
}
