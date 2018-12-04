import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left.side.component.html',
  styleUrls: ['./left.side.component.css']
})
export class LeftSideComponent implements OnInit {

  sideMenuWith = '';
  navHeight = 'auto';
  menu: any[];
  @Output() getIframe = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.setMenu();
  }

  @Input()
  set menuWith(sideMenuWith: string) {
    this.sideMenuWith = (sideMenuWith && sideMenuWith.trim()) || '240px';
  }

  get menuWith(): string { return this.sideMenuWith; }

  toggleNav() {
    if (this.navHeight === 'auto') {
      this.navHeight = '56px';
    } else {
      this.navHeight = 'auto';
    }
  }

  setMenu() {
    this.menu = [
      {
        title: '首页',
        children: [
          {
            title: '百度',
            url: 'http://www.baidu.com',
            active: false,
          }, {
            title: '新浪',
            url: 'http://www.sina.com.cn',
            active: false,
          }, {
            title: '腾讯',
            url: 'http://www.qq.com',
            active: false,
          }, {
            title: '爱奇艺',
            url: 'http://www.iqiyi.com',
            active: false,
          }
        ],
      }
    ];
  }
  openIframe(item) {
    this.getIframe.emit(item);
  }
}
