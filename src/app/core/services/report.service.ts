import { Injectable } from "@angular/core";
import { ReportModel } from "../models/report.model";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService{
  private reports: ReportModel[] = [
    {
      reportId: 101,
      reportName: "Sales Report",
      reportDesc: "Monthly sales data with regional breakdown",
      priority: "High",
      fromTableName: "sales_data",
      joinConditionWithTable: "JOIN region_table ON sales_data.region_id = region_table.id",
      fileType: "CSV",
      region: "North America",
      headers: "Date,Product,Revenue,Region",
      delimiter: ",",
      fnameCondition: "sales_{YYYYMM}.csv",
      actionCondition: "APPEND",
      headers_2: "ProductID,Category",
      headersCount: "4",
      fileName: "sales_report.csv",
      ctlFileName: "sales_report.ctl",
      reportGroupId: "GRP001"
    },
    {
      reportId: 102,
      reportName: "Inventory Report",
      reportDesc: "Current stock levels and reorder points",
      priority: "Medium",
      fromTableName: "inventory",
      joinConditionWithTable: "JOIN suppliers ON inventory.supplier_id = suppliers.id",
      fileType: "JSON",
      region: "Europe",
      headers: "ItemID,Stock,ReorderPoint,Supplier",
      delimiter: "|",
      fnameCondition: "inventory_{YYYYMMDD}.json",
      actionCondition: "REPLACE",
      headers_2: "SupplierName,Contact",
      headersCount: "5",
      fileName: "inventory_report.json",
      ctlFileName: "inventory_report.ctl",
      reportGroupId: "GRP002"
    }
  ];

  getReports(): ReportModel[] {
    return this.reports;
  }

  getReportsByEtlId(etlId: number): ReportModel[] {
    return this.reports.filter(report => report.reportId === etlId);
  }

  createReport(newReport: any): Observable<ReportModel> {
    newReport.reportId = this.reports.length + 1;
    this.reports.push(newReport);
    return of(newReport);
  }
}
