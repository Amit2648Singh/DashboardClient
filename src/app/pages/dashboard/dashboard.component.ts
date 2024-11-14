import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesModule } from 'src/app/table/tables/tables.module';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,TablesModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  
}
