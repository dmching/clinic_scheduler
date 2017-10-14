import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app.routing.module";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login/login.service";
import {ScheduleComponent} from "./schedule/schedule.component";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, DashboardComponent, LoginComponent, ScheduleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
}
