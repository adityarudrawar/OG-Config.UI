import { Component, OnInit } from '@angular/core';
import {AppModel} from '../../core/models/app.model';
import { AppService } from '../../core/services/app.service';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { ReportFormComponent } from './components/report-form/report-form.component';

@Component({
  selector: 'app-dashboard',
  imports: [AppSearchComponent, ReportFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  apps: AppModel[] = [];
  selectedApp: AppModel;

  constructor(private appService: AppService) {}

  onAppSelected(app: AppModel): void {
    this.selectedApp = app;
    console.log('Selected app:', this.selectedApp);
    // Optionally navigate to a detailed view or load related reports
  }

}
