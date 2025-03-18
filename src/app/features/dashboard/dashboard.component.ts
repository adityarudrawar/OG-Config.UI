import { Component, ViewChild } from '@angular/core';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { ReportMetadataComponent } from './components/report-metadata/report-metadata.component';
import { ReportComputationComponent } from './components/report-computation/report-computation.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'dashboard',
  imports:[MatStepper,
    MatStep,
    ReportDetailsComponent, ReportMetadataComponent, ReportComputationComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('ReportDetailsComponent') detailsComponent: ReportDetailsComponent;
  @ViewChild('ReportMetadataComponent') metadataComponent: ReportMetadataComponent;
  @ViewChild('ReportComputationComponent') computationComponent: ReportComputationComponent;

  constructor() {}

  nextStepDetails() {
    this.detailsComponent.submitForm().then((response:any) => {
      // API returned 200, so move to next step.
      this.stepper.next();
      console.log('Response from API:', response);
    }).catch((err: any) => {
      // Handle API error here (e.g., show a message to the user).
      console.error('Error submitting report details:', err);
    });
  }

  nextStepMetadata() {
    this.metadataComponent.submitForm().then((response:any) => {
      this.stepper.next();
      console.log('Response from API:', response);
    }).catch((err: any) => {
      console.error('Error submitting metadata:', err);
    });
  }

  nextStepComputation() {
    this.computationComponent.submitForm().then((response:any) => {
      // Final submission or finish process.
      console.log('Response from API:', response);
      this.stepper.next();
    }).catch((err: any) => {
      console.error('Error during computation:', err);
    });
  }
}
