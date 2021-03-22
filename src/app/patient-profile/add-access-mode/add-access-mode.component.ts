import { AccessModeService } from './../../services/accessMode.service';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';

import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
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

  accessModeForm: FormGroup;
  idDisability: number;
  name = '';
  conditionOk = false;
  allDeviceTemplates: DeviceTemplate[]=[];
  constructor(
    private router: Router,
    private accessModeService: AccessModeService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage,
    private deviceTemplateService: DeviceTemplateService
  ) {
    this.accessModeForm = new FormGroup({
      PatientProfile_oid: new FormControl(),
      Disability_oid: new FormControl(),
      DeviceTemplate_oid: new FormControl(),
      TypeAccessMode: new FormControl('', [
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
      this.accessModeForm.get('PatientProfile_oid').setValue(val);
      console.log(this.accessModeForm.value.PatientProfile_oid);
    });

    this.deviceTemplateService.getAllDeviceTemplate()
    .subscribe( (res: any) => {
      this.allDeviceTemplates = res;
        }, ( err ) => {
  
    });

    this.storage.get('idDisability').then((val) => {
      console.log('I´m carrying id disability', val);
      this.accessModeForm.get('Disability_oid').setValue(val);
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
  this.ngOnInit();
  this.accessModeService.createAccessMode(this.accessModeForm.value)
  .subscribe( (res: any) => {
    console.log(res);
    this.name = res['Description'];
    this.saveAlert();
  }, ( err ) => {

  });

  this.accessModeForm.reset();
}

}
