
export class Condition {
    constructor(
            Id: number,
            // tslint:disable-next-line: variable-name
            PatientProfile_oid?: number,
            Nombre?: string,
            DateInitial?: Date,
            DateEnd?: Date,
            Description?: string,
            // tslint:disable-next-line: variable-name
            Disabilities_oid?: number[],
            ClinicalStatus?: number,
            Disease?: number,
            // tslint:disable-next-line: variable-name
            CarePlan_oid?: number[],
            // tslint:disable-next-line: variable-name
            Goal_oid?: number[]
          )
    {}
  }
