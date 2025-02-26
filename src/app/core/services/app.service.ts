import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppModel } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // Mock data for APPs
  private apps: AppModel[] = [
    {
      APPID: 1,
      BTBDL: 'BTBDL_Value1',
      RTBDL: 'RTBDL_Value1',
      DBCONNECTION: 'Connection_1',
      DBTYPE: 'SQL',
      API: 'api/endpoint1',
      TYPE: 'Type_A'
    },
    {
      APPID: 2,
      BTBDL: 'BTBDL_Value2',
      RTBDL: 'RTBDL_Value2',
      DBCONNECTION: 'Connection_2',
      DBTYPE: 'NoSQL',
      API: 'api/endpoint2',
      TYPE: 'Type_B'
    }
  ];

  getApps(): Observable<AppModel[]> {
    return of(this.apps);
  }

  // For creating an app, you might add a method that accepts a new app and returns an Observable
  createApp(newApp: AppModel): Observable<AppModel> {
    newApp.APPID = this.apps.length + 1;  // Simulate database-generated ID
    this.apps.push(newApp);
    return of(newApp);
  }
}
