import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { BaseChartDirective } from 'ng2-charts';


export const routes: Routes = [
    // { path: '',redirectTo: '', pathMatch: 'full'}, // Default route
    { path: '', component: DashboardComponent}, // Default route
    { path: 'dashboard',redirectTo: ''}, // Default route

  ];
 
@NgModule({

  imports: [RouterModule.forRoot(routes), BrowserModule,BaseChartDirective],
  exports: [RouterModule],
})
export class AppRoutingModule { }

