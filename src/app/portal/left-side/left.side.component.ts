import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left.side.component.html',
  styleUrls: ['./left.side.component.css']
})
export class LeftSideComponent implements OnInit {

  sideMenuWith = '';

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set menuWith(sideMenuWith: string) {
    this.sideMenuWith = sideMenuWith;
  }

  get menuWith(): string { return this.sideMenuWith; }
}
