import { AdaptationDetailRequired } from './adaptationDetailRequired.model';
import { AdaptationRequest } from './adaptationRequest.model';
import { AdaptationTypeRequired } from './adaptationTypeRequired.model';

export class AccessMode {
  constructor(
    Id: number,
    // tslint:disable-next-line: variable-name
    Patient_oid?: number,
    Name?: string,
    // tslint:disable-next-line: variable-name
    Disability_oid?: number,
    Description?: string,
    // tslint:disable-next-line: variable-name
    DeviceTemplate_oid?: number[],
    TypeAccessMode?: number,
    // tslint:disable-next-line: no-shadowed-variable
    AdaptationTypeRequired?: AdaptationTypeRequired [],
    // tslint:disable-next-line: no-shadowed-variable
    AdaptationRequest?: AdaptationRequest[],
    // tslint:disable-next-line: no-shadowed-variable
    AdaptationDetailRequired?: AdaptationDetailRequired[]
        )
  {}
}
