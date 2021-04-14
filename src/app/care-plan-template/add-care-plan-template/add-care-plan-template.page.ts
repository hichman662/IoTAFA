import { PatientProfileService } from './../../services/patientProfile.service';
import { Condition } from './../../models/condition.model';
import { CarePlanTemplateService } from './../../services/carePlanTemplate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CarePlanTemplate } from 'src/app/models/carePlanTemplate.model';
import { PatientProfile } from 'src/app/models/patientProfile.model';


@Component({
  selector: 'app-add-care-plan-template',
  templateUrl: './add-care-plan-template.page.html',
  styleUrls: ['./add-care-plan-template.page.scss'],
})
export class AddCarePlanTemplatePage implements OnInit {

  // tslint:disable-next-line: ban-types
  segmentModel = 'carePlan';
  segmentModel2 = 'profile';
  carePlanOk = false;
  name = '';
  idCarePlan: number;
  nameCarePlan: '';
  carePlanForm: FormGroup;
  carePlanTemplate: CarePlanTemplate ;
  conditionForm: FormGroup;
  patientForm: FormGroup;
  allConditions: Condition[] = [];
  allPatients: PatientProfile[] = [];
  arrayOidDeConditions: [] = [];

  constructor(
    private carePlanTemplateService: CarePlanTemplateService,
    private patientProfileService: PatientProfileService,

    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.carePlanTemplate = null;
    this.conditionForm = null;
    this.patientForm = null;

    this.carePlanForm = new FormGroup({
      Title: new FormControl('', [
        Validators.required
      ]),
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      DurationDays: new FormControl(Number, [
        Validators.required
      ]),
      Status: new FormControl(Number, [
        Validators.required
      ]),
      Intent: new FormControl(Number, [
        Validators.required
      ]),
      Modified: new FormControl(new Date().toISOString(), [
        Validators.required
      ]),
    });

    this.conditionForm = new FormGroup({
      p_addressconditions_oids: new FormControl([0], [
        Validators.required
      ])
    });

    this.patientForm = new FormGroup({
      p_patientprofile_oid: new FormControl(Number, [
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

    this.patientProfileService.getAllPatientProfile()
    .subscribe( (res: any) => {
      this.allPatients = res;
        }, ( err ) => {
    });
   }

   onSubmit(){
    this.carePlanTemplate = this.carePlanForm.value;
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

    });

  }



  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.nameCarePlan} has been added successfully, now you can add another parameters for ${this.nameCarePlan} `,
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
  this.storage.get('idCarePlan').then((val) => {
    console.log('I´m carrying id Care Plan', val);
  });
}

addConditionToCarePlan(){
  console.log(this.conditionForm.get('p_addressconditions_oids').value);
  this.carePlanTemplateService.addConditionToCarePlan(this.idCarePlan , this.conditionForm.get('p_addressconditions_oids').value)
    .subscribe( (res: any) => {
      this.addConditionPresentAlert();
        }, ( err ) => {
    });

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

addPatientToCarePlan(){
  this.carePlanTemplateService.addPatientToCarePlan(this.idCarePlan , this.patientForm.get('p_patientprofile_oid').value)
  .subscribe( (res: any) => {
    this.addPatientPresentAlert();
      }, ( err ) => {
  });

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

}
