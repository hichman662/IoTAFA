import { Target } from './../../models/target.model';
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
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss'],
})
export class AddGoalComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  segmentModel = 'goal';

  goalOk = false;
  nameMeasure = '';
  idCarePlan: number;
  idGoal: number;
  nameGoal: '';
  goalForm: FormGroup;
  measureForm: FormGroup;
  targetForm: FormGroup;
  allConditions: Condition[] = [];
  allTelemetries: Telemetry[] = [];
  allMeasures: Measure[] = [];
  goal: Goal;
  measure: Measure;
  target: Target;

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
      Measure_oid: new FormControl(Number)
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

    this.storage.get('idCarePlan').then((val) => {
      console.log('I´m carrying id Care Plan inside Goal', val);
      this.idCarePlan = val;
      this.goalForm.get('CarePlan_oid').setValue(this.idCarePlan);

    });
   }

   addGoal(){
    this.goal = this.goalForm.value;
    this.carePlanTemplateService.createGoal(this.goal)
    // tslint:disable-next-line: deprecation
    .subscribe( (res: any) => {
      console.log(res);
      // tslint:disable-next-line: no-string-literal
      this.idGoal = res['Id'];
      console.log(this.idGoal);
      // tslint:disable-next-line: no-string-literal
      this.nameGoal = res['Name'];
      this.goalOk = true;
      this.storage.set('idGoal', this.idGoal);
      this.targetForm.get('Goal_oid').setValue(this.idGoal);
      this.presentAlert();
    }, ( err ) => {

    });

  }



  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
   message: `The ${this.nameGoal} has been added successfully, now you can add another parameters for ${this.nameGoal} `,
      buttons: [  {
        text: 'Ok',
        handler: () => {
          this.showStorage();

        }
      }
/*  */
      ]
    });

    await alert.present();
  }

  segmentChanged(ev: any) {
      /*  console.log('Segment changed', ev); */
     }

showStorage(){
   this.storage.get('idGoal').then((val) => {
    console.log('I´m carrying id Goal', val);
  });
}
addMeasure(){
  this.measure = this.measureForm.value;
  this.carePlanTemplateService.createMeasure(this.measure)
  // tslint:disable-next-line: deprecation
  .subscribe( (res: any) => {
    console.log(res);
    // tslint:disable-next-line: no-string-literal
    this.nameMeasure = res['Name'];
    this.addMeasurePresentAlert();
  }, ( err ) => {

  });
}



async addMeasurePresentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Measure ${this.nameMeasure} has been added successfully`,
    buttons: [  {
      text: 'Ok',
      handler: () => {

      }
    }
    ]
  });

  await alert.present();
}

addTarget(){
  this.target = this.targetForm.value;
  console.log(this.targetForm.value);
  this.carePlanTemplateService.createTarget(this.target)
  // tslint:disable-next-line: deprecation
  .subscribe( (res: any) => {
    console.log(res);
    // tslint:disable-next-line: no-string-literal
    this.addTargetPresentAlert();
  }, ( err ) => {

  });
}


async addTargetPresentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Target has been added successfully to the Goal`,
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


}
