import {of as ObservableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Telemetry } from './../models/telemetry.model';
import { Data } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class TelemetryService {
  constructor() {}

}
