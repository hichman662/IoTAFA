import {of as ObservableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Telemetry } from './../models/telemetry.model';
import { Data } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TelemetryService {
  constructor(private http: HttpClient) {}


  public getTelemetryById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <Telemetry>(`${environment.base_url}/Telemetry/${uid}`);
  }

  public deleteTelemetry(uid) {
    return this.http.delete(`${environment.base_url}/Telemetry/Destroy?p_telemetry_oid=${uid}`);
  }

  public createTelemetry( data: Telemetry ): Observable<object> {
    return this.http.post(`${environment.base_url}/Telemetry/New_`, data);
  }
  
}
