import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-disability',
  templateUrl: './add-disability.component.html',
  styleUrls: ['./add-disability.component.scss'],
})
export class AddDisabilityComponent implements OnInit {

  disabilityForm: FormGroup;
  idDisability: number;
  name = '';
  constructor(
    private router: Router,
    private patientProfileService: PatientProfileService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {
    this.disabilityForm = new FormGroup({
      Patient_oid: new FormControl(),
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      Type: new FormControl('', [
        Validators.required
      ]),
      Severity: new FormControl('', [
        Validators.required
      ]),
      Origin_oid: new FormControl(0),
      AccessMode_oid : new FormControl([0])
    });
  }

  ngOnInit(){
    this.storage.get('idPatientProfile').then((val) => {
      console.log('I´m carrying id Patient Profile', val);
      this.disabilityForm.get('Patient_oid').setValue(val);
      console.log(this.disabilityForm.value.Patient_oid);
    });
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Disability ${this.name} has been added successfully`,
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
  this.patientProfileService.createDisability(this.disabilityForm.value)
  .subscribe( (res: any) => {
    console.log(res);
    console.log('Disability added');
    this.storage.set('idDisability', res['Id']);
    this.name = res['Name'];
    this.saveAlert();
  }, ( err ) => {

  });

  this.disabilityForm.reset();
}

}
