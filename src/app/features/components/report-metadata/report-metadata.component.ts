import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-report-metadata',
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <mat-label>Author</mat-label>
        <input matInput formControlName="author" placeholder="Enter author name" />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Category</mat-label>
        <input matInput formControlName="category" placeholder="Enter report category" />
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
export class ReportMetadataComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      author: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  submitForm(): Promise<any> {
    if (this.form.invalid) {
      return Promise.reject('Invalid metadata form');
    }
    // Replace '/api/report-metadata' with your actual API endpoint.
    return Promise.resolve('Metadata submitted successfully');
  }
}
