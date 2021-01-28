import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceTemplate  } from '../models/deviceTemplate.model';
import {of, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeviceTemplateService {

  private deviceTemplate: DeviceTemplate;
  private TOKEN = localStorage.getItem ('TOKEN');
  private headers: HttpHeaders = new HttpHeaders({Authorization: this.TOKEN});

constructor(private http: HttpClient) { }

public getDeviceTemplateById( uid: string): Observable<object>{
  if (!uid) { uid = ''; }
  return this.http.get <DeviceTemplate>(`${environment.base_url}/deviceTemplates/?id=${uid}` );
}

public getAllDeviceTemplates(): Observable<object>{
  return this.http.get(`${environment.base_url}/deviceTemplates/`);
}

public makeDeviceTemplate( data: DeviceTemplate ): Observable<object> {
  return this.http.post(`${environment.base_url}/deviceTemplates/`, data);
}

public updateDeviceTemplate(uid: string, data: DeviceTemplate): Observable<object> {
  return this.http.put(`${environment.base_url}/deviceTemplates/${uid}`, data);
}

public deleteDeviceTemplate(uid) {
  return this.http.delete(`${environment.base_url}/deviceTemplates/${uid}`);
}

}
