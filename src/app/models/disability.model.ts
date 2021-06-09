import { PatientProfile } from './patientProfile.model';

export class Disability {
  constructor(
    Id: number,
    // tslint:disable-next-line: variable-name
    Patient_oid: number,
    Description: string,
    Name: string,
    Type?: number,
    Severity?: number,
    // tslint:disable-next-line: variable-name
    Origin_oid?: number,
    // tslint:disable-next-line: variable-name
    AccessMode_oid?: number[]
        )
  {}
}
