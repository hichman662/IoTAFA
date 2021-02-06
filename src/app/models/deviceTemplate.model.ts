import { Telemetry } from './telemetry.model';
import { Command } from './command.model';
import { Property } from './property.model';

export class DeviceTemplate {
  constructor(
        id?: string,
        name?: string,
        isEdge?: boolean,
        type?: number,
        command?: Command[],
        property?: Property[],
        telemetry?: Telemetry[]

        )
  {}

}

