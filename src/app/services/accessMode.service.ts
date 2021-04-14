import { AccessMode } from './../models/accessMode.model';
import { AdaptationDetailRequired } from './../models/adaptationDetailRequired.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { AdaptationRequest } from '../models/adaptationRequest.model';
import { AdaptationTypeRequired } from '../models/adaptationTypeRequired.model';



@Injectable({
  providedIn: 'root'
})
export class AccessModeService {

constructor(private http: HttpClient) {

}

// Access Mode

public getAllAccessMode(): Observable<object>{
  return this.http.get(`${environment.base_url}/AccessMode/ReadAll`);
}

public getAccessModeById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <AccessMode>(`${environment.base_url}/AccessMode/${uid}` );
}

public createAccessMode( data: AccessMode ): Observable<object> {
  return this.http.post(`${environment.base_url}/AccessMode/NEW_`, data);
}

public updateAccessMode(uid: number, data: AccessMode): Observable<object> {
  return this.http.put(`${environment.base_url}/AccessMode/Modify?idAccessMode=${uid}`, data);
}

public deleteAccessMode(uid) {
  return this.http.delete(`${environment.base_url}/AccessMode/Destroy?p_accessmode_oid=${uid}`);
}

// Adaptation Request

public getAllAdaptationRequest(): Observable<object>{
    return this.http.get(`${environment.base_url}/AdaptationRequest/ReadAll`);
  }

  public getAdaptationRequestById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <AdaptationRequest>(`${environment.base_url}/AdaptationRequest/${uid}` );
  }

  public createAdaptationRequest( data: AdaptationRequest ): Observable<object> {
    return this.http.post(`${environment.base_url}/AdaptationRequest/New_`, data);
  }

  public updateAdaptationRequest(uid: number, data: AdaptationRequest): Observable<object> {
    return this.http.put(`${environment.base_url}/AdaptationRequest/Modify?idAdaptationRequest=${uid}`, data);
  }

  public deleteAdaptationRequest(uid) {
    return this.http.delete(`${environment.base_url}/AdaptationRequest/Destroy?p_adaptationrequest_oid=${uid}`);
  }

  // Adaptation Type Required

  public getAllAdaptationTypeRequired(): Observable<object>{
    return this.http.get(`${environment.base_url}/AdaptationTypeRequired/ReadAll`);
  }

  public getAdaptationTypeRequiredById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <AdaptationTypeRequired>(`${environment.base_url}/AdaptationTypeRequired/${uid}` );
  }

  public createAdaptationTypeRequired( data: AdaptationTypeRequired ): Observable<object> {
    return this.http.post(`${environment.base_url}/AdaptationTypeRequired/New_`, data);
  }

  public updateAdaptationTypeRequired(uid: number, data: AdaptationTypeRequired): Observable<object> {
    return this.http.put(`${environment.base_url}/AdaptationTypeRequired/Modify?idAdaptationTypeRequired=${uid}`, data);
  }

  public deleteAdaptationTypeRequired(uid) {
    return this.http.delete(`${environment.base_url}/AdaptationTypeRequired/Destroy?p_adaptationtyperequired_oid=${uid}`);
  }

  // Adaptation Detail Required

  public getAllAdaptationDetailRequired(): Observable<object>{
    return this.http.get(`${environment.base_url}/AdaptationDetailRequired/ReadAll`);
  }

  public getAdaptationDetailRequiredById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <AdaptationDetailRequired>(`${environment.base_url}/AdaptationDetailRequired/${uid}` );
  }

  public createAdaptationDetailRequired( data: AdaptationDetailRequired ): Observable<object> {
    return this.http.post(`${environment.base_url}/AdaptationDetailRequired/New_`, data);
  }

  public updateAdaptationDetailRequired(uid: number, data: AdaptationDetailRequired): Observable<object> {
    return this.http.put(`${environment.base_url}/AdaptationDetailRequired/Modify?idAdaptationDetailRequired=${uid}`, data);
  }

  public deleteAdaptationDetailRequired(uid) {
    return this.http.delete(`${environment.base_url}/AdaptationDetailRequired/Destroy?p_adaptationdetailrequired_oid=${uid}`);
  }

}
