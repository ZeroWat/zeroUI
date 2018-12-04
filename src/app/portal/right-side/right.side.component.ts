import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SideService} from './side.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right.side.component.html',
  styleUrls: ['./right.side.component.css']
})
export class RightSideComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  isShowMenu = true;
  isHome = true;
  tabs: any[] = [];

  constructor(
    private sideService: SideService,
  ) { }

  ngOnInit() {
  }

  @Input()
  set iframeInfo(event) {
    if (event) {
      this.isHome = false;
      this.tabs.push(event);
      for (const item of this.tabs) {
        if (event === item) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
    }
  }

  toggleSideMenu() {
    if (this.isShowMenu) {
      this.isShowMenu = false;
      this.toggle.emit('56px');
    } else {
      this.isShowMenu = true;
      this.toggle.emit('240px');
    }
  }

  transformURL(url) {
    return this.sideService.sanitizerURL(url);
  }

  openPage(page) {
    if (page === 'home') {
      this.isHome = true;
      for (const item of this.tabs) {
        item.active = false;
      }
    } else {
      this.isHome = false;
      for (const item of this.tabs) {
        if (page === item) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
    }

  }
  closeTab(page) {
    for ( let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] === page) {
        this.tabs.splice(i, 1);
      }
    }
  }
}
