import { Condition } from './../models/condition.model';
import { PatientProfile } from './../models/patientProfile.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { Disability } from '../models/disability.model';


@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {

    patientProfile: PatientProfile;

constructor(private http: HttpClient) {

}

// Patient Profile

public getAllPatientProfile(): Observable<object>{
  return this.http.get(`${environment.base_url}/PatientProfile/ReadAll`);
}

public getPatientProfileById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <PatientProfile>(`${environment.base_url}/PatientProfile/${uid}` );
}

public createPatientProfile( data: PatientProfile ): Observable<object> {
  return this.http.post(`${environment.base_url}/PatientProfile/NEW_`, data);
}

public updatePatientProfile(uid: number, data: PatientProfile): Observable<object> {
  return this.http.put(`${environment.base_url}/PatientProfile/Modify?idPatientProfile=${uid}`, data);
}

public deletePatientProfile(uid) {
  return this.http.delete(`${environment.base_url}/PatientProfile/Destroy?p_patientprofile_oid=${uid}`);
}

// Condition (disease)

public getAllCondition(): Observable<object>{
    return this.http.get(`${environment.base_url}/Condition/ReadAll`);
  }

  public getConditionById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <Condition>(`${environment.base_url}/Condition/${uid}` );
  }

  public createCondition( data: Condition ): Observable<object> {
    return this.http.post(`${environment.base_url}/Condition/NEW_`, data);
  }

  public updateCondition(uid: number, data: Condition): Observable<object> {
    return this.http.put(`${environment.base_url}/Condition/Modify?idCondition=${uid}`, data);
  }

  public deleteCondition(uid) {
    return this.http.delete(`${environment.base_url}/Condition/Destroy?p_condition_oid=${uid}`);
  }

// Disability

public getAllDisability(): Observable<object>{
    return this.http.get(`${environment.base_url}/Disability/ReadAll`);
}

  public getDisabilityById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Disability>(`${environment.base_url}/Disability/${uid}`);
}

public createDisability( data: Disability): Observable<object> {
    return this.http.post(`${environment.base_url}/Disability/New_`, data);
}

public updateDisability(uid: number, data: Disability): Observable<object> {
    return this.http.put(`${environment.base_url}/Disability/Modify?idDisability=${uid}`, data);
}

public deleteDisability(uid) {
  return this.http.delete(`${environment.base_url}/Disability/Destroy?p_disability_oid=${uid}`);
}

}
