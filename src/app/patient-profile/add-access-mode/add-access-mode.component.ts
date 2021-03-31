import { AdaptationTypeRequired } from './../../models/adaptationTypeRequired.model';
import { AdaptationRequest } from './../../models/adaptationRequest.model';
import { AdaptationDetailRequired } from './../../models/adaptationDetailRequired.model';
import { AccessMode } from './../../models/accessMode.model';
import { AccessModeService } from './../../services/accessMode.service';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';

import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DeviceTemplate } from 'src/app/models/deviceTemplate.model';


@Component({
  selector: 'app-add-access-mode',
  templateUrl: './add-access-mode.component.html',
  styleUrls: ['./add-access-mode.component.scss'],
})
export class AddAccessModeComponent implements OnInit {
  segmentModel = "AdaptionRequest";
  disabilityOk = false;
  idDisability: number;
  accessModeOk = false;
  conditionOk = false;
  name = '';
  accessModeForm: FormGroup;
  adaptionRequestForm: FormGroup;
  adaptationTypeRequiredForm: FormGroup;
  adaptationDetailRequiredForm: FormGroup;
  allDeviceTemplates: DeviceTemplate[] = [];
  accessMode: AccessMode ;
  adaptationDetailRequired: AdaptationDetailRequired;
  adaptationRequest: AdaptationRequest;
  adaptationTypeRequired: AdaptationTypeRequired;
  constructor(
    private router: Router,
    private accessModeService: AccessModeService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage,
    private deviceTemplateService: DeviceTemplateService
  ) {
    this.accessModeForm = new FormGroup({
      Name: new FormControl('', [
        Validators.required
      ]),
      Patient_oid: new FormControl(),
      Disability_oid: new FormControl(),
      DeviceTemplate_oid: new FormControl ([0]),
      TypeAccessMode: new FormControl(Number, [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
    });
    /* adaption Request Form */
    this.adaptionRequestForm = new FormGroup({
      AccessMode_oid: new FormControl(),
      AccessModeTarget: new FormControl(Number, [
        Validators.required
      ]),
      LanguageOfAdaptation: new FormControl(Number, [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
    });
    /* adaptation Type Required Form */
    this.adaptationTypeRequiredForm = new FormGroup({
      AccessMode_oid: new FormControl(),
      AdaptionRequest: new FormControl(Number, [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ])
    });
    /* Adaptation Detail Required */
    this.adaptationDetailRequiredForm = new FormGroup({
      AccessMode_oid: new FormControl(),
      AdaptationRequest: new FormControl(Number, [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ])
    });
  }


  ngOnInit(){
    this.storage.get('idPatientProfile').then((val) => {
      console.log('I´m carrying id Patient Profile', val);
      this.accessModeForm.get('Patient_oid').setValue(val);
      console.log(this.accessModeForm.value.Patient_oid);
    });

    this.deviceTemplateService.getAllDeviceTemplate()
    .subscribe( (res: any) => {
      this.allDeviceTemplates = res;
        }, ( err ) => {
    });

    this.storage.get('idDisability').then((val) => {
      console.log('I´m carrying id disability', val);
      if(val !== null){
        this.accessModeForm.get('Disability_oid').setValue(val);
        this.disabilityOk = true;

      }
      console.log(this.accessModeForm.value.Disability_oid);
    });

  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Access Mode ${this.name} has been added successfully`,
      buttons: [
      {
        text: 'Ok',
        handler: () => {
          /* this.router.navigateByUrl('tabs/tab1/device-template/add-device-template'); */
        }
      }]
    });

    await alert.present();
}
onSubmit() {
  this.accessMode = this.accessModeForm.value;
  this.ngOnInit();
  this.accessModeService.createAccessMode(this.accessMode)
  .subscribe( (res: any) => {
    this.accessModeOk = true;
    console.log(res);
    this.name = res['Name'];
    this.adaptionRequestForm.get('AccessMode_oid').setValue(res['Id']);
    this.adaptationTypeRequiredForm.get('AccessMode_oid').setValue(res['Id']);
    this.adaptationDetailRequiredForm.get('AccessMode_oid').setValue(res['Id']);
    this.saveAlert();
  }, ( err ) => {

  });

  this.accessModeForm.reset();
}

SubmitAdaptionRequest(){
  this.adaptationRequest = this.adaptionRequestForm.value;
  this.accessModeService.createAdaptationRequest(this.adaptationRequest)
  .subscribe( (res: any) => {
    console.log(res);
    this.adaptionRequestsaveAlert();
  }, ( err ) => {

  });

  this.adaptionRequestForm.reset();

}
async adaptionRequestsaveAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Adaptation request has been added successfully`,
    buttons: [
    {
      text: 'Ok',
      handler: () => {
        // some command
      }
    }]
  });

  await alert.present();
}
SubmitAdaptionTypeRequired(){
  this.adaptationTypeRequired = this.adaptationTypeRequiredForm.value;
  this.accessModeService.createAdaptationTypeRequired(this.adaptationTypeRequired)
  .subscribe( (res: any) => {
    console.log(res);
    this.adaptionTypeRequiredsaveAlert();
  }, ( err ) => {

  });

  this.adaptationTypeRequiredForm.reset();
}

async adaptionTypeRequiredsaveAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Adaptation type required has been added successfully`,
    buttons: [
    {
      text: 'Ok',
      handler: () => {
        // some command
      }
    }]
  });

  await alert.present();
}
SubmitadaptationDetailRequired(){
  this.adaptationDetailRequired = this.adaptationDetailRequiredForm.value;
  this.accessModeService.createAdaptationDetailRequired(this.adaptationDetailRequired)
  .subscribe( (res: any) => {
    console.log(res);
    this.adaptationDetailRequiredsaveAlert();
  }, ( err ) => {

  });

  this.adaptationDetailRequiredForm.reset();
}
async adaptationDetailRequiredsaveAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SUCCESS!',
    message: `Adaptation detail required has been added successfully`,
    buttons: [
    {
      text: 'Ok',
      handler: () => {
        // some command
      }
    }]
  });

  await alert.present();
}
}
