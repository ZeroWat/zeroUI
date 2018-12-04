import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideComponent } from './portal/left-side/left.side.component';
import { RightSideComponent } from './portal/right-side/right.side.component';
import { PortalComponent } from './portal/portal.component';
import {SideService} from './portal/right-side/side.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    RightSideComponent,
    PortalComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    SideService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
