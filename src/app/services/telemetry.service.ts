import { StateTelemetry } from './../models/stateTelemetry';
import { RangeStateTelemetry } from './../models/rangeStateTelemetry';
import {of as ObservableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Telemetry } from './../models/telemetry.model';
import { Data } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventTelemetry } from '../models/eventTelemetry';
import { LocationTelemetry } from '../models/locationTelemetry';
import { SensorTelemetry } from '../models/sensorTelemetry';


@Injectable({
  providedIn: 'root'
})
export class TelemetryService {
  constructor(private http: HttpClient) {}


  // telemetry
  public getAllTelemetries(): Observable<object>{
    return this.http.get(`${environment.base_url}/Telemetry/ReadAll`);
  }

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

  public updateTelemetry(uid: number, data: Telemetry): Observable<object> {
    return this.http.put(`${environment.base_url}/Telemetry/Modify?idTelemetry=${uid}`, data);
  }

  // Evenet telemetry
  public createEventTelemetry( data: EventTelemetry ): Observable<object> {
    return this.http.post(`${environment.base_url}/EventTelemetry/New_`, data);
  }

  // State telemetry
  public createStateTelemetry( data: StateTelemetry): Observable<object> {
    return this.http.post(`${environment.base_url}/StateTelemetry/New_`, data);
  }

  // Location telemetry
  public createLocationTelemetry( data: LocationTelemetry): Observable<object> {
    return this.http.post(`${environment.base_url}/LocationTelemetry/New_`, data);
  }

  // Sensor telemetry
  public createSensorTelemetry( data: SensorTelemetry): Observable<object> {
    return this.http.post(`${environment.base_url}/SensorTelemetry/New_`, data);
  }

  // Range state Telemetry
  public createRangeSensorTelemetry( data: RangeStateTelemetry): Observable<object> {
    return this.http.post(`${environment.base_url}/RangeStateTelemetry/New_`, data);
  }


}
