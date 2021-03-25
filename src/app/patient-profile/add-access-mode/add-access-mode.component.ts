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
  disabilityOk = false;
  accessModeForm: FormGroup;
  idDisability: number;
  name = '';
  conditionOk = false;
  allDeviceTemplates: DeviceTemplate[] = [];
  accessMode: AccessMode ;
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
    console.log(res);
    this.name = res['Name'];
    this.saveAlert();
  }, ( err ) => {

  });

  this.accessModeForm.reset();
}

}
