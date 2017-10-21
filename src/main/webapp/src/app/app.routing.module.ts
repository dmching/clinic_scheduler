import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {ScheduleComponent} from "./schedule/schedule.component";

const routes : Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent },
    { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
