import { Telemetry } from './../../models/telemetry.model';
import { TelemetryService } from './../../services/telemetry.service';
import { PatientProfileService } from './../../services/patientProfile.service';
import { CarePlanTemplateService } from 'src/app/services/carePlanTemplate.service';
import { CareActivityService } from './../../services/careActivity.service';

import { Condition } from './../../models/condition.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Measure } from 'src/app/models/measure.model';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss'],
})
export class AddGoalComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  segmentModel = 'goal';

  goalOk = false;
  name = '';
  idCarePlan: number;
  idGoa: number;
  nameGoal: '';
  goalForm: FormGroup;
  measureForm: FormGroup;
  targetForm: FormGroup;
  allConditions: Condition[] = [];
  allTelemetries: Telemetry[] = [];
  allMeasures: Measure[] = [];


  constructor(
    private patientProfileService: PatientProfileService,
    private telemetryService: TelemetryService,
    private carePlanTemplateService: CarePlanTemplateService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.goalForm = null;
    this.measureForm = null;
    this.targetForm = null;

    this.goalForm = new FormGroup({
      CarePlan_oid: new FormControl(Number, [
        Validators.required
      ]),
      Priority: new FormControl(Number, [
        Validators.required
      ]),
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      Status: new FormControl(Number, [
        Validators.required
      ]),
      Condition_oid: new FormControl(Number, [
        Validators.required
      ]),
      Category: new FormControl(Number, [
        Validators.required
      ]),
      OutcomeCode: new FormControl('', [
        Validators.required
      ])
    });

    this.measureForm = new FormGroup({
      CareActivity_oid: new FormControl(Number, [
        Validators.required
      ]),
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      LOINCcode: new FormControl('', [
        Validators.required
      ]),
      Telemetry_oid: new FormControl([0])
    });

    this.targetForm = new FormGroup({
      Goal_oid: new FormControl(Number, [
        Validators.required
      ]),
      DesiredValue: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      DueDate: new FormControl(new Date().toISOString(), [
        Validators.required
      ]),
      Measure_oid: new FormControl(Number, [
        Validators.required
      ])
    });
   }

   
   ionViewWillEnter(){}

   ngOnInit() {

    this.patientProfileService.getAllCondition()
    .subscribe( (res: any) => {
      this.allConditions = res;
        }, ( err ) => {
    });
    this.carePlanTemplateService.getAllMeasure()
    .subscribe( (res: any) => {
      this.allMeasures = res;
        }, ( err ) => {
    });
    this.telemetryService.getAllTelemetries()
    .subscribe( (res: any) => {
      this.allTelemetries = res;
        }, ( err ) => {
    });
    this.telemetryService.getAllTelemetries()
    .subscribe( (res: any) => {
      this.allTelemetries = res;
        }, ( err ) => {
    });
   }

   addCareplan(){
   /*  this.carePlanTemplate = this.carePlanForm.value;
    this.carePlanTemplateService.createCarePlanTemplate(this.carePlanTemplate)
    // tslint:disable-next-line: deprecation
    .subscribe( (res: any) => {
      console.log(res);
      this.name = this.carePlanForm.get('Name').value;
      // tslint:disable-next-line: no-string-literal
      this.idCarePlan = res['Id'];
      console.log(this.idCarePlan);
      // tslint:disable-next-line: no-string-literal
      this.nameCarePlan = res['Name'];
      this.carePlanOk = true;
      this.storage.set('idCarePlan', this.idCarePlan);
      this.presentAlert();
    }, ( err ) => {

    }); */

  }



  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
   /*    message: `The ${this.nameCarePlan} has been added successfully, now you can add another parameters for ${this.nameCarePlan} `, */
      buttons: [  {
        text: 'Ok',
        handler: () => {
          this.showStorage();

        }
      }/* ,
      {
        text: 'Add another Device Template',
        handler: () => {
         this.deviceTemplateForm.reset();
        }
      } */
      ]
    });

    await alert.present();
  }

  segmentChanged(ev: any) {
      /*  console.log('Segment changed', ev); */
     }

showStorage(){
/*   this.storage.get('idCarePlan').then((val) => {
    console.log('I´m carrying id Care Plan', val);
  });
}

addConditionToCarePlan(){
  console.log(this.conditionForm.get('p_addressconditions_oids').value);
  this.carePlanTemplateService.addConditionToCarePlan(this.idCarePlan , this.conditionForm.get('p_addressconditions_oids').value)
    .subscribe( (res: any) => {
      this.addConditionPresentAlert();
        }, ( err ) => {
    }); */

}
async addConditionPresentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Conditions have been added successfully to Care Plan`,
    buttons: [  {
      text: 'Ok',
      handler: () => {
        this.showStorage();

      }
    }
    ]
  });

  await alert.present();
}

addAppointment(){
  /* this.carePlanTemplateService.addPatientToCarePlan(this.idCarePlan , this.patientForm.get('p_patientprofile_oid').value)
  .subscribe( (res: any) => {
    this.addPatientPresentAlert();
      }, ( err ) => {
  }); */

}

async addPatientPresentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Patient has been added successfully to Care Plan`,
    buttons: [  {
      text: 'Ok',
      handler: () => {
        this.showStorage();

      }
    }
    ]
  });

  await alert.present();
}
addGoal(){}
addMeasure(){}
addTarget(){}

}
