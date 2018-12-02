import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left.side.component.html',
  styleUrls: ['./left.side.component.css']
})
export class LeftSideComponent implements OnInit {

  @Input() isShowMenu: boolean;
  @ViewChild('menu') menu;
  menuWith: any;

  constructor() { }

  ngOnInit() {
    this.toggleMenu();
  }

  toggleMenu() {
    debugger;
    if (this.isShowMenu) {
      console.log(this.isShowMenu);
      this.menuWith = '240px';
    } else {
      this.menuWith = '0';
    }
  }
}
