import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-report-details',
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <mat-label>Report Title</mat-label>
        <input matInput formControlName="title" placeholder="Enter report title" />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Description</mat-label>
        <textarea matInput formControlName="description" placeholder="Enter description"></textarea>
      </mat-form-field>
    </form>
  `,
  imports: [
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    MatInput
  ]
})
export class ReportDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  // Called by the wizard container on Next click.
  submitForm(): Promise<any> {
    if (this.form.invalid) {
      return Promise.reject('Invalid report details form');
    }
    // Replace '/api/report-details' with your actual API endpoint.
    // return this.http.post('/api/report-details', this.form.value).toPromise();
    return Promise.resolve('Report details submitted successfully');
  }
}
