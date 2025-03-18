import { Component, OnInit, signal, WritableSignal, computed, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { EtlMasterService } from '../../../core/services/etl-master.service';
import { MatListModule } from '@angular/material/list';
import { EtlMasterModel } from '../../../core/models/etl-master.model';
import { NgFor } from '@angular/common';
import { ReportService } from '../../../core/services/report.service';
import { ReportModel } from '../../../core/models/report.model';

@Component({
  selector: 'app-etl-pipelines',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    NgFor
  ],
  templateUrl: './etl-pipelines.component.html',
  styleUrl: './etl-pipelines.component.scss'
})
export class EtlPipelinesComponent implements OnInit {
  etlForm = new FormGroup({
    etlType: new FormControl(''),
    fkSourceAppId: new FormControl(''),
    fkDestAppId: new FormControl(''),
    fkReportId: new FormControl(''),
    taskTitle: new FormControl(''),
    taskGroup: new FormControl(''),
    destTable: new FormControl(''),
    postLoadProdId: new FormControl(''),
    preLoadProdId: new FormControl(''),
  });

  etls: WritableSignal<EtlMasterModel[]> = signal([]);
  etlSelected: WritableSignal<EtlMasterModel>;
  etlReports: Signal<ReportModel[]> = computed(() => {
    return this.reportService.getReportsByEtlId(this.etlSelected().etlId);
  })

  constructor(private etlMasterService: EtlMasterService, private reportService: ReportService) {}

  onSubmit() {
    console.warn(this.etlForm.value);
    this.etlMasterService.createEtlMaster(this.etlForm.value).subscribe(resposne => {
      this.etlForm.reset();
      console.log('ETL created successfully');
      alert("ETL created successfully");
    });
  }

  ngOnInit() {
    this.etlMasterService.getEtlMaster().subscribe(etls => {
      this.etls.set(etls);
      console.log("ETLs:", this.etls());
    });
  }

  onSelectEtl(etl: EtlMasterModel): void {
    this.etlSelected.set(etl);
    console.log("ETL selected:", this.etlSelected);
  }


}
