import { Injectable } from "@angular/core";
import { EtlMasterModel } from "../models/etl-master.model";
import { of, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EtlMasterService{
  private etls: EtlMasterModel[] = [
    {
      etlId: 201,
      etlType: "Full Load",
      fkSourceAppId: 1,
      fkDestAppId: 2,
      fkReportId: 101,
      taskTitle: "Daily Sales ETL",
      taskGroup: "Sales Processing",
      destTabe: "sales_aggregated",
      postLoadProdId: "P123",
      preLoadProdId: "P456"
    },
    {
      etlId: 202,
      etlType: "Incremental Load",
      fkSourceAppId: 2,
      fkDestAppId: 1,
      fkReportId: 102,
      taskTitle: "Inventory Sync ETL",
      taskGroup: "Inventory Management",
      destTabe: "inventory_snapshot",
      postLoadProdId: "P789",
      preLoadProdId: "P321"
    }
  ]

  getEtlMaster(): Observable<EtlMasterModel[]> {
    return of(this.etls);
  }

  createEtlMaster(newEtl: any): Observable<EtlMasterModel> {
    newEtl.etlId = this.etls.length + 1;
    this.etls.push(newEtl);
    return of(newEtl);
  }
}
