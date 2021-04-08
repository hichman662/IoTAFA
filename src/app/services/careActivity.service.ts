import { Appointment } from './../models/appointment.model';
import { Medication } from './../models/medication.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';

import { CareActivity } from '../models/careActivity.model';



@Injectable({
  providedIn: 'root'
})
export class CareActivityService {

    careActivity: CareActivity;
    medication: Medication;
    appointment: Appointment;

constructor(private http: HttpClient) {

}

// Care Activity

public getAllCareActivity(): Observable<object>{
  return this.http.get(`${environment.base_url}/CareActivity/ReadAll`);
}

public getCareActivityById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <CareActivity>(`${environment.base_url}/CareActivity/${uid}` );
}

public createCareActivity( data: CareActivity ): Observable<object> {
  return this.http.post(`${environment.base_url}/CareActivity/New_`, data);
}

public updateCareActivity(uid: number, data: CareActivity): Observable<object> {
  return this.http.put(`${environment.base_url}/CareActivity/Modify?idCareActivity=${uid}`, data);
}

public deleteCareActivity(uid) {
  return this.http.delete(`${environment.base_url}/CareActivity/Destroy?p_careactivity_oid=${uid}`);
}

// Medication

public getAllMedication(): Observable<object>{
    return this.http.get(`${environment.base_url}/Medication/ReadAll`);
  }

  public getMedicationById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <Medication>(`${environment.base_url}/Medication/${uid}` );
  }

  public createMedication( data: Medication ): Observable<object> {
    return this.http.post(`${environment.base_url}/Medication/New_`, data);
  }

  public updateMedication(uid: number, data: Medication): Observable<object> {
    return this.http.put(`${environment.base_url}/Medication/Modify?idMedication=${uid}`, data);
  }

  public deleteMedication(uid) {
    return this.http.delete(`${environment.base_url}/Medication/Destroy?p_medication_oid=${uid}`);
  }

  // Appointment

public getAllAppointment(): Observable<object>{
    return this.http.get(`${environment.base_url}/Appointment/ReadAll`);
  }

  public getAppointmentById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <Appointment>(`${environment.base_url}/Appointment/${uid}` );
  }

  public createAppointment( data: Appointment ): Observable<object> {
    return this.http.post(`${environment.base_url}/Appointment/New_`, data);
  }

  public updateAppointment(uid: number, data: Appointment): Observable<object> {
    return this.http.put(`${environment.base_url}/Appointment/Modify?idAppointment=${uid}`, data);
  }

  public deleteAppointment(uid) {
    return this.http.delete(`${environment.base_url}/Appointment/Destroy?p_appointment_oid=${uid}`);
  }
}
