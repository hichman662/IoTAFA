import { AccessModeService } from './../../services/accessMode.service';
import { PatientProfileService } from './../../services/patientProfile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { PatientProfile } from 'src/app/models/patientProfile.model';


@Component({
  selector: 'app-add-patient-profile',
  templateUrl: './add-patient-profile.page.html',
  styleUrls: ['./add-patient-profile.page.scss'],
})
export class AddPatientProfilePage implements OnInit {

 

  segmentModel = "patientProfile";
  patientOk = false;
  name = '';
  idPatientProfile: number;
  patientProfileForm: FormGroup;
  patientProfile: PatientProfile ;
  conditionOk= false;

  constructor(
    private patientProfileService: PatientProfileService,
    private accessModeService: AccessModeService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.patientProfile = null;

    this.patientProfileForm = new FormGroup({
      Name: new FormControl('', [
        Validators.required
      ]),
      Description: new FormControl('', [
        Validators.required
      ]),
      Region: new FormControl('', [
        Validators.required
      ]),
      PreferredLanguage: new FormControl('', [
        Validators.required
      ]),
      HazardAvoidance: new FormControl('', [
        Validators.required
      ]),
    });
   }

   ionViewWillEnter(){}

   ngAfterViewInit() {

  }

   ngOnInit() {

   }

   onSubmit(){
    this.patientProfile = this.patientProfileForm.value;
    this.patientProfileService.createPatientProfile(this.patientProfile)
    .subscribe( (res: any) => {
     /*  this.name = this.patientProfileForm.get('Id').value; */
      this.idPatientProfile = res['Id'];
      this.name = res['Name'];
      console.log(this.idPatientProfile);
     
      this.patientOk = true;
      this.storage.set('idPatientProfile', this.idPatientProfile);

      this.presentAlert();
    }, ( err ) => {

    });

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.name} has been added successfully, now you can add another parameters for ${this.name} `,
      buttons: [  {
        text: 'Ok',
        handler: () => {
          this.showStorage();
          /* this.router.navigateByUrl('/tabs/tab1/device-template'); */
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
       console.log('Segment changed', ev);
     }

showStorage(){
  this.storage.get('idPatientProfile').then((val) => {
    console.log('I´m carrying id Patient Profile', val);
  });
}
}
