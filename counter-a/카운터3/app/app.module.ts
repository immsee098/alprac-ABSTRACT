import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncreaserComponent } from './increaser/increaser.component';
import { DecreaserComponent } from './decreaser/decreaser.component';

@NgModule({
  declarations: [
    AppComponent,
    IncreaserComponent,
    DecreaserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
