import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebAdminCoreModule } from 'web-admin-core'
import { TickTockModule } from 'tick-tock-module'
import { AppComponent } from './app.component';
import {UserComponent} from './extensions/user.component'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    TickTockModule,
    WebAdminCoreModule
  ],
  entryComponents:[UserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule created");
  }
}
