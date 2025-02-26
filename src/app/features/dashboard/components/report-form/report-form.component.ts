import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReportService } from '../../../../core/services/report.service';

@Component({
  selector: 'app-report-form',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.scss'
})
export class ReportFormComponent {
  reportForm = new FormGroup({
    reportName: new FormControl(''),
    reportDesc: new FormControl(''),
    priority: new FormControl(''),
    fromTableName: new FormControl(''),
    joinConditionWithTable: new FormControl(''),
    fileType: new FormControl(''),
    region: new FormControl(''),
    headers: new FormControl(''),
    delimiter: new FormControl(''),
    fnameCondition: new FormControl(''),
    actionCondition: new FormControl(''),
    headers_2: new FormControl(''),
    headersCount: new FormControl(''),
    fileName: new FormControl(''),
    ctlFileName: new FormControl(''),
    reportGroupId: new FormControl(''),
  });

  constructor(private reportService: ReportService) {}

  onSubmit() {
    console.warn(this.reportForm.value);
    this.reportService.createReport(this.reportForm.value).subscribe(resposne => {
      this.reportForm.reset();
      console.log('Report created successfully');
      alert("Report created successfully");
    });
  }

}
