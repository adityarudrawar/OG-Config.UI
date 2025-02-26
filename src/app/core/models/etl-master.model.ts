export interface EtlMasterModel {
  etlId: number;
  etlType: string;
  fkSourceAppId: number;
  fkDestAppId: number;
  fkReportId: number;
  taskTitle: string;
  taskGroup: string;
  destTabe: string;
  postLoadProdId: string;
  preLoadProdId: string;
}
