import { Component, OnInit } from '@angular/core';
import { ShellConfig } from './shell-config';

@Component({
  selector: 'refactor-ott-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(public shellConfig: ShellConfig) { }

  ngOnInit(): void {
  }

}
