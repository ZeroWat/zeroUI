import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideComponent } from './portal/left-side/left.side.component';
import { RightSideComponent } from './portal/right-side/right.side.component';
import { PortalComponent } from './portal/portal.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
