import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgLodashModule} from '@magnal/ng-lodash';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLodashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
