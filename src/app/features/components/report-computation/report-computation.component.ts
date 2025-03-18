import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-report-computation',
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <mat-label>Computation Parameter</mat-label>
        <input matInput formControlName="param" placeholder="Enter parameter" />
      </mat-form-field>
    </form>
  `,
  imports: [MatLabel, MatFormField, ReactiveFormsModule, MatInput]
})
export class ReportComputationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      param: ['', Validators.required]
    });
  }

  submitForm(): Promise<any> {
    if (this.form.invalid) {
      return Promise.reject('Invalid computation form');
    }
    // Replace '/api/report-computation' with your actual API endpoint.
    return Promise.resolve('Computation submitted successfully');
  }
}
