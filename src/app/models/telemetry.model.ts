import { SensorTelemetry } from './sensorTelemetry';
import { EventTelemetry } from './eventTelemetry';
import { LocationTelemetry } from './locationTelemetry';
import { StateTelemetry } from './stateTelemetry';


export class Telemetry{
  constructor(
        Id?: number,
        Name?: string,
        Frecuency?: number,
        Schema?: number,
        Unit?: number,
        // tslint:disable-next-line: variable-name
        DeviceTemplate_oid?: number,
        // tslint:disable-next-line: variable-name
        TypeTelemetry_oid?: number,
        // tslint:disable-next-line: variable-name
        StateTelemetry_oid?: number,
        // tslint:disable-next-line: variable-name
        VitalSign_oid ?: number[]
        )
  {}

}

