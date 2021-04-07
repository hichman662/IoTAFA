import { Comunication } from './Comunication.model';
import { CareActivity } from './careActivity.model';
import { Goal } from './goal.model';

export class CarePlanTemplate {
  constructor(
      Id: number,
      Name?: string,
      Description?: string,
      // tslint:disable-next-line: no-shadowed-variable
      CareActivity?: CareActivity[],
      // tslint:disable-next-line: variable-name
      PatientProfile_oid?: number,
      // tslint:disable-next-line: no-shadowed-variable
      Goals?: Goal[],
      // tslint:disable-next-line: variable-name
      Status?: number,
      Intent?: number,
      Title?: string,
      Modified?: Date,
      // tslint:disable-next-line: variable-name
      AddressConditions_oid?: number[],
      DurationDays?: number,
      // tslint:disable-next-line: no-shadowed-variable
      Comunication?: Comunication[]
        )
  {}
}

