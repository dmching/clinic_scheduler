import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app.routing.module";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {ScheduleComponent} from "./schedule/schedule.component";
import {HttpModule} from "@angular/http";
import {LoginService} from "./login/login.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, DashboardComponent, LoginComponent, ScheduleComponent ],
  providers:    [ LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
