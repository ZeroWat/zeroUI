import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SideService {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  sanitizerURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
