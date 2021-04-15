import { Appointment } from './../../models/appointment.model';
import { Medication } from './../../models/medication.model';
import { NutritionOrder } from './../../models/nutritionOrder.model';
import { CareActivityService } from './../../services/careActivity.service';
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
import { CareActivity } from 'src/app/models/careActivity.model';

@Component({
  selector: 'app-add-care-activity',
  templateUrl: './add-care-activity.component.html',
  styleUrls: ['./add-care-activity.component.scss'],
})
export class AddCareActivityComponent implements OnInit {


  // tslint:disable-next-line: ban-types
  segmentModel = 'activity';

  activityOk = false;
  name = '';
  idCarePlan: number;
  idCareActivity: number;
  nameActivity: '';
  activityForm: FormGroup;
  medicationForm: FormGroup;
  nutritionForm: FormGroup;
  appointmentForm: FormGroup;
  careActivity: CareActivity;
  nutritionOrder: NutritionOrder;
  medication: Medication;
  appointment: Appointment;
  closeNutr = false;
  closeMedic = false;


  constructor(
    private careActivityService: CareActivityService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.careActivity = null;
    this.medicationForm = null;
    this.nutritionForm = null;

    this.activityForm = new FormGroup({
      CarePlan_oid: new FormControl(Number, [
        Validators.required
      ]),
      TypeActivity: new FormControl(Number, [
        Validators.required
      ]),
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      Duration: new FormControl(Number, [
        Validators.required
      ]),
      Location: new FormControl('', [
        Validators.required
      ]),
      OutcomeCode: new FormControl('', [
        Validators.required
      ]),
      ActivityCode: new FormControl('', [
        Validators.required
      ]),
      Periodicity: new FormControl(Number, [
        Validators.required
      ]),
    });

    this.medicationForm = new FormGroup({
      CareActivity_oid: new FormControl(Number, [
        Validators.required
      ]),
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      Manufacturer: new FormControl('', [
        Validators.required
      ]),
      Dosage: new FormControl('', [
        Validators.required
      ]),
      ProductReference: new FormControl(Number, [
        Validators.required
      ]),
      MedicationCode: new FormControl('', [
        Validators.required
      ]),
      Form: new FormControl(Number, [
        Validators.required
      ]),
    });

    this.nutritionForm = new FormGroup({
      CareActivity_oid: new FormControl(Number, [
        Validators.required
      ]),
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      DietCode: new FormControl('', [
        Validators.required
      ]),
    });


    this.appointmentForm = new FormGroup({
      CareActivity_oid: new FormControl(Number, [
        Validators.required
      ]),
      IsVirtual: new FormControl(true),
      Direction: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      ReasonCode: new FormControl('', [
        Validators.required
      ])
    });
   }

   ionViewWillEnter(){}

   addAnotherActivity(){
    console.log('clicked');
    this.activityOk = false;
    this.closeNutr = false;
    this.closeMedic = false;
    this.nutritionForm.reset();
    this.medicationForm.reset();
    this.activityForm.reset();
   }

   ngOnInit() {
    this.storage.get('idCarePlan').then((val) => {
      console.log('I´m carrying id Care Plan inside Activity', val);
      this.idCarePlan = val;
      this.activityForm.get('CarePlan_oid').setValue(this.idCarePlan);
    });
   }

   addActivity(){

    this.careActivity = this.activityForm.value;
    this.careActivityService.createCareActivity(this.careActivity)
    // tslint:disable-next-line: deprecation
    .subscribe( (res: any) => {
      console.log(res);
      this.nameActivity = this.activityForm.get('Name').value;
      // tslint:disable-next-line: no-string-literal
      this.idCareActivity = res['Id'];
      console.log(this.idCareActivity);
      this.activityOk = true;
      this.closeNutr = true;
      this.closeMedic = true;
      this.storage.set('idCareActivity', this.idCareActivity);
      this.appointmentForm.get('CareActivity_oid').setValue(this.idCareActivity);
      this.nutritionForm.get('CareActivity_oid').setValue(this.idCareActivity);
      this.medicationForm.get('CareActivity_oid').setValue(this.idCareActivity);
      this.activityPresentAlert();
    }, ( err ) => {
    });

  }

  async activityPresentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.nameActivity} has been added successfully, now you can add another parameters for ${this.nameActivity} `,
      buttons: [  {
        text: 'Ok',
        handler: () => {

        }
      }
      ]
    });

    await alert.present();
  }

  segmentChanged(ev: any) {
      /*  console.log('Segment changed', ev); */
     }




addNutrition(){
   this.nutritionOrder = this.nutritionForm.value;
   this.careActivityService.createNutritionOrder(this.nutritionOrder)
   .subscribe( (res: any) => {
    this.addNutritionPresentAlert();
    this.closeNutr = false;
       }, ( err ) => {
   });
 }

 addMedication(){
  this.medication = this.medicationForm.value;
  this.careActivityService.createMedication(this.medication)
  .subscribe( (res: any) => {
   this.addMedicationPresentAlert();
   this.closeMedic = false;
      }, ( err ) => {
  });
 }

 addAppointment(){
  this.appointment = this.appointmentForm.value;
  this.careActivityService.createAppointment(this.appointment)
  .subscribe( (res: any) => {
   this.addAppointmentPresentAlert();
      }, ( err ) => {
  });

}

async addNutritionPresentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Nutrition order has been added successfully to care activity`,
    buttons: [  {
      text: 'Ok',
      handler: () => {
      }
    }
    ]
  });

  await alert.present();
}
 async addMedicationPresentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Medication has been added successfully to care activity`,
    buttons: [  {
      text: 'Ok',
      handler: () => {
      }
    }
    ]
  });

  await alert.present();
}

async addAppointmentPresentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Appointment has been added successfully to care activity`,
    buttons: [  {
      text: 'Ok',
      handler: () => {
      }
    }
    ]
  });

  await alert.present();
}

}
