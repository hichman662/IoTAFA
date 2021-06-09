import { Target } from './target.model';

export class Goal {
    constructor(
        Id: number,
        // tslint:disable-next-line: variable-name
        CarePlan_oid?: number,
        Priority?: number,
        Targets?: Target[],
        Status?: number,
        // tslint:disable-next-line: variable-name
        Condition_oid?: number,
        Description?: string,
        Category?: string,
        OutcomeCode?: string,
        Name?: string
          )
    {}
  }
