import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right.side.component.html',
  styleUrls: ['./right.side.component.css']
})
export class RightSideComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  isShowMenu = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSideMenu() {
    if (this.isShowMenu) {
      this.isShowMenu = false;
      this.toggle.emit('0');
    } else {
      this.isShowMenu = true;
      this.toggle.emit('240px');
    }
  }
}
