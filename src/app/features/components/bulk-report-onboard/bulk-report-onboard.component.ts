import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { NgIf } from '@angular/common';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-report-onboard',
  imports: [
    MatFormField,
    MatLabel,
    FormsModule,
    MatSelectModule,
    MatIcon,
    MatButton,
    MatChipsModule,
    NgIf
  ],
  templateUrl: './bulk-report-onboard.component.html',
  styleUrl: './bulk-report-onboard.component.scss'
})
export class BulkReportOnboardComponent {
  uploadTemplates: string[] = ['Report-Bulk-Onboard-Template.xlsx', 'Computation-Bulk-Template.xlsx'];
  selectedTemplate: string = '';
  uploadedFile: File | null = null;
  errorMessage: string | null = null;
  isFileValid: boolean = false;
  sheets: string[] = [];
  selectedSheet: string = '';
  excelData: any = {};

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      if (this.uploadedFile.name !== this.selectedTemplate) {
        this.errorMessage = 'Invalid file selected';
      } else {
        this.errorMessage = null;
        this.isFileValid = true;
        this.readExcelFile(this.uploadedFile);
      }
      return;
    }
  }

  submitFile() {
    console.log("API call to submit the file content");
  }

  readExcelFile(uploadedFile: File) {
    console.log("Reading excel file content");
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(reader.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      // Store sheet names
      this.sheets = workbook.SheetNames;
      console.log("Sheets: ", this.sheets);
      this.selectedSheet = this.sheets[0]; // Default to the first sheet

      // Read all sheets
      this.sheets.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        this.excelData[sheetName] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      });

      this.isFileValid = true;
    };
    reader.readAsArrayBuffer(uploadedFile);
  }

  updateCell(rowIdx: number, colIdx: number, event: Event): void {
    const inputElement = event.target as HTMLElement;
    this.excelData[this.selectedSheet][rowIdx][colIdx] = inputElement.innerText;
    console.log("Updated cell: ", this.excelData[this.selectedSheet][rowIdx][colIdx]);
  }
}
