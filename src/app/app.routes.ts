import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ReportFormComponent } from './features/components/report-form/report-form.component';
import { EtlPipelinesComponent } from './features/components/etl-pipelines/etl-pipelines.component';
import { BulkReportOnboardComponent } from './features/components/bulk-report-onboard/bulk-report-onboard.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'report-form', component: ReportFormComponent},
  {path: 'etl-pipelines', component: EtlPipelinesComponent},
  {path: 'bulk-report-onboard', component : BulkReportOnboardComponent},
  // {path: 'app-form', component: AppFormComponent},
];
