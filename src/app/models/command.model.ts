export class Command {
  constructor(
    Id: number,
    Name: string,
    IsSynchronous?: boolean,
    // tslint:disable-next-line: variable-name
    DeviceTemplate_oid?: number,
    Type?: number,
    Description?: string,
    // tslint:disable-next-line: variable-name
    Telemetries_oid?: number[]

    )
    {}
}
