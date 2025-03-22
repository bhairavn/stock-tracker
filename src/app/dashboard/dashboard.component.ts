import { Component } from '@angular/core';
import { ChartCardComponent } from '../chart-card/chart-card.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  imports: [ChartCardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  columns = 3;
  charts = Array(6).fill(null); // Example of 6 repeated components
}
