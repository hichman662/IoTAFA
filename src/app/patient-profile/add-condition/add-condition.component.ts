import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-condition',
  templateUrl: './add-condition.component.html',
  styleUrls: ['./add-condition.component.scss'],
})
export class AddConditionComponent implements OnInit {
  constructor(
    private router: Router,
    private patientProfileService: PatientProfileService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {
    this.conditionForm = new FormGroup({
      Name: new FormControl('', [
        Validators.required
      ]),
      PatientProfile_oid: new FormControl(),
      Disease: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      DateInitial: new FormControl(new Date().toISOString(), [
        Validators.required
      ]),
      DateEnd: new FormControl(new Date().toISOString()),
      ClinicalStatus: new FormControl('', [
        Validators.required
      ])
    });
  }

  startDate = null;
  conditionForm: FormGroup;
  idDisability: number;
  name = '';
  conditionOk = false;

  ngOnInit(){
    this.storage.get('idPatientProfile').then((val) => {
      console.log('I´m carrying id Patient Profile', val);
      this.conditionForm.get('PatientProfile_oid').setValue(val);
      console.log(this.conditionForm.value.PatientProfile_oid);
    });
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Condition ${this.name} has been added successfully`,
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
  this.patientProfileService.createCondition(this.conditionForm.value)
  .subscribe( (res: any) => {
    console.log(res);
    this.conditionOk = true;
    console.log('Condition added');
    this.name = res['Description'];
    this.saveAlert();
  }, ( err ) => {

  });

  this.conditionForm.reset();
}


}
