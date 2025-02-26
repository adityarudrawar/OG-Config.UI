import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ReportFormComponent } from './features/dashboard/components/report-form/report-form.component';
import { EtlPipelinesComponent } from './features/dashboard/components/etl-pipelines/etl-pipelines.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'report-form', component: ReportFormComponent},
  {path: 'etl-pipelines', component: EtlPipelinesComponent},
  // {path: 'app-form', component: AppFormComponent},
];
