import { Comunication } from './comunication.model';
import { NutritionOrder } from './nutritionOrder.model';
import { Appointment } from './appointment.model';
import { Medication } from './medication.model';

export class CareActivity {
  constructor(
      Id: number,
      Periodicity?: number,
      Description?: string,
      Duration?: number,
      // tslint:disable-next-line: variable-name
      CarePlan_oid?: number,
      // tslint:disable-next-line: no-shadowed-variable
      Medication?: Medication,
      Location?: string,
      OutcomeCode?: string,
      // tslint:disable-next-line: no-shadowed-variable
      NutritionOrder?: NutritionOrder,
      TypeActivity?: number,
      // tslint:disable-next-line: variable-name
      NextActivity_oid?: number,
      // tslint:disable-next-line: variable-name
      PreviousActivity_oid?: number,
      Notification?: Comunication[],
      ActivityCode?: string,
      Name?: string,
      // tslint:disable-next-line: no-shadowed-variable
      Appointment?: Appointment []
        )
  {}
}

