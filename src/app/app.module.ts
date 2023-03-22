import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HatComponent } from './components/hat/hat.component';
import { ScrollerComponent } from './components/scroller/scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    HatComponent,
    ScrollerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
