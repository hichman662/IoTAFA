import { AccessMode } from './accessMode.model';
import { Condition } from './condition.model';
import { Disability } from './disability.model';

export class PatientProfile {
  constructor(
      Id: number,
      Name?: string,
      Description?: string,
      // tslint:disable-next-line: no-shadowed-variable
      AccessMode?: AccessMode[],
      PreferredLanguage?: number,
      Region?: string,
      HazardAvoidance?: number,
      // tslint:disable-next-line: no-shadowed-variable
      Disability?: Disability[],
      // tslint:disable-next-line: variable-name
      CarePlan_oid?: number[],
      Diseases?: Condition[]
        )
  {}
}
