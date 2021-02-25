import { Property } from './../models/property.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceTemplate  } from '../models/deviceTemplate.model';
import {of, Observable} from 'rxjs';
import { Command } from '../models/command.model';
import { Telemetry } from './../models/telemetry.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceTemplateService {
  
  deviceTemplate: DeviceTemplate;
  /* private deviceTemplate: DeviceTemplate;
  private TOKEN = localStorage.getItem ('TOKEN');
  private headers: HttpHeaders = new HttpHeaders({Authorization: this.TOKEN}); */

constructor(private http: HttpClient) {
    
}

//Device template

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

// Property

public createProperty( data: Property): Observable<object> {
  return this.http.post(`${environment.base_url}/Property/New_`, data);
}

public getPropertyById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Property>(`${environment.base_url}/Property/${uid}`);
}
public updateProperty(uid: number, data: Property): Observable<object> {
  return this.http.put(`${environment.base_url}/Property/Modify?idProperty=${uid}`, data);
}

public deleteProperty(uid) {
  return this.http.delete(`${environment.base_url}/Property/Destroy?p_property_oid=${uid}`);
}

public getAllProperties(): Observable<object>{
  return this.http.get(`${environment.base_url}/Property/ReadAll`);
}

// Command

public createCommand( data: Command): Observable<object> {
  return this.http.post(`${environment.base_url}/Command/New_`, data);
}
public getCommandById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Command>(`${environment.base_url}/Command/${uid}`);
}

public deleteCommand(uid) {
  return this.http.delete(`${environment.base_url}/Command/Destroy?p_command_oid=${uid}`);
}

public getAllCommands(): Observable<object>{
  return this.http.get(`${environment.base_url}/Command/ReadAll`);
}

public updateCommand(uid: number, data: Command): Observable<object> {
  return this.http.put(`${environment.base_url}/Command/Modify?idCommand=${uid}`, data);
}



}
