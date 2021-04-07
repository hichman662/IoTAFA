import { Target } from './../models/target.model';
import { Goal } from './../models/goal.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { CarePlanTemplate } from '../models/carePlanTemplate.model';



@Injectable({
  providedIn: 'root'
})
export class CarePlanTemplateService {

    carePlantemplate: CarePlanTemplate;
    goal: Goal;
    target: Target;

constructor(private http: HttpClient) {

}

// Care Plan Template

public getAllCarePlantemplate(): Observable<object>{
  return this.http.get(`${environment.base_url}/CarePlanTemplate/ReadAll`);
}

public getCarePlantemplateById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <CarePlanTemplate>(`${environment.base_url}/CarePlanTemplate/${uid}` );
}

public createCarePlanTemplate( data: CarePlanTemplate ): Observable<object> {
  return this.http.post(`${environment.base_url}/CarePlanTemplate/New_`, data);
}

public updateCarePlanTemplate(uid: number, data: CarePlanTemplate): Observable<object> {
  return this.http.put(`${environment.base_url}/CarePlanTemplate/Modify?idCarePlanTemplate=${uid}`, data);
}

public deleteCarePlanTemplate(uid) {
  return this.http.delete(`${environment.base_url}/CarePlanTemplate/Destroy?p_careplantemplate_oid=${uid}`);
}

// GOAL

public getAllGoal(): Observable<object>{
    return this.http.get(`${environment.base_url}/Goal/ReadAll`);
  }

  public getGoalById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <Goal>(`${environment.base_url}/Goal/${uid}` );
  }

  public createGoal( data: Goal ): Observable<object> {
    return this.http.post(`${environment.base_url}/Goal/New_`, data);
  }

  public updateGoal(uid: number, data: Goal): Observable<object> {
    return this.http.put(`${environment.base_url}/Goal/Modify?idGoal=${uid}`, data);
  }

  public deleteGoal(uid) {
    return this.http.delete(`${environment.base_url}/Goal/Destroy?p_goal_oid=${uid}`);
  }

  // Target
  public getAllTarget(): Observable<object>{
    return this.http.get(`${environment.base_url}/Target/ReadAll`);
  }

  public getTargetById( uid: number): Observable<object>{
    if (!uid) { uid = null; }
    return this.http.get <Target>(`${environment.base_url}/Target/${uid}` );
  }

  public createTarget( data: Target ): Observable<object> {
    return this.http.post(`${environment.base_url}/Target/New_`, data);
  }

  public updateTarget(uid: number, data: Target): Observable<object> {
    return this.http.put(`${environment.base_url}/Target/Modify?idTarget=${uid}`, data);
  }

  public deleteTarget(uid) {
    return this.http.delete(`${environment.base_url}/Target/Destroy?p_target_oid=${uid}`);
  }
}
