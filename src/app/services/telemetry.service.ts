import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Telemetry } from './../models/telemetry.model';


@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  arrayTelemetries: Telemetry[];

  constructor() {
    this.arrayTelemetries = [];
  }

getAllTelemetries(): Promise <Telemetry[]>{
  // tslint:disable-next-line: no-shadowed-variable
  return new Promise ((resolve, reject) => {
      resolve(this.arrayTelemetries);
  });
}

insertTelemetryToArray(telemetry): void{
  this.arrayTelemetries.push(telemetry);
  console.log(this.arrayTelemetries);
}

}
