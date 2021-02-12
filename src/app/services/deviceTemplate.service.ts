import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceTemplate  } from '../models/deviceTemplate.model';
import {of, Observable} from 'rxjs';
import { Command } from '../models/command.model';
import { Property } from '../models/property.model';
import { Telemetry } from './../models/telemetry.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceTemplateService {
  arrayTelemetries: Telemetry [];
  arrayCommands: Command [];
  arrayProperties: Property [];
  deviceTemplate: DeviceTemplate;
  /* private deviceTemplate: DeviceTemplate;
  private TOKEN = localStorage.getItem ('TOKEN');
  private headers: HttpHeaders = new HttpHeaders({Authorization: this.TOKEN}); */

constructor(private http: HttpClient) {
    this.arrayTelemetries = [];
    this.arrayCommands = [];
    this.arrayProperties = [];
}

public getAllDeviceTemplate(): Observable<object>{
  return this.http.get(`${environment.base_url}/DeviceTemplate/ReadAll`);
}

public getDeviceTemplateById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <DeviceTemplate>(`${environment.base_url}/DeviceTemplate/${uid}` );
}

public createDeviceTemplate( data: DeviceTemplate ): Observable<object> {
  return this.http.post(`${environment.base_url}/DeviceTemplate/NEW_`, data);
}

public updateDeviceTemplate(uid: number, data: DeviceTemplate): Observable<object> {
  return this.http.put(`${environment.base_url}/DeviceTemplate/Modify?idDeviceTemplate=${uid}`, data);
}

public deleteDeviceTemplate(uid) {
  return this.http.delete(`${environment.base_url}/DeviceTemplate/Destroy?p_devicetemplate_oid=${uid}`);
}

insertCommandToArray(command): void{
  this.arrayCommands.push(command);
  console.log('Array the commands: ');
  console.log(this.arrayCommands);
}

insertPropertyToArray(property): void{
  this.arrayProperties.push(property);
  console.log('Array the properties: ');
  console.log(this.arrayProperties);
}

insertTelemetryToArray(telemetry): void{
  this.arrayTelemetries.push(telemetry);
  console.log('Array the Telemetry: ')
  console.log(this.arrayTelemetries);
}

getArrayProperties(): Property[]{
  return this.arrayProperties;
}

getArrayTelemetries(): Telemetry[] {
  return this.arrayTelemetries;
}

getArrayCommands(): Command[] {
  return this.arrayCommands;
}


}
