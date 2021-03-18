import { PatientProfileService } from './../services/patientProfile.service';
import { PatientProfile } from './../models/patientProfile.model';
import { Router } from '@angular/router';
import { IonItemSliding, AlertController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.page.html',
  styleUrls: ['./patient-profile.page.scss'],
})
export class PatientProfilePage implements OnInit {
 
  public listPatientProfile: PatientProfile[] = [];
  constructor(
            private patientProfileService: PatientProfileService,
            public alertController: AlertController,
            public loadingController: LoadingController,
            public router: Router,

            ) {}

  ngOnInit(): void {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ionViewWillEnter() {
    this.patientProfileService.getAllPatientProfile()
    .subscribe( (res: any) => {
        this.listPatientProfile = res;
    }, ( err) => {
        console.log(err);
    });
}

  closeSliding(slidingItem: IonItemSliding){
    slidingItem.close();
  }

 async deletePatientProfile(slidingItem: IonItemSliding, id: number){
    slidingItem.close();
    console.log(id);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Remove Patient Profile',
      message: `Are you sure you want remove ${name}?`,
      buttons: [  {
        text: 'Cancel',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Agree',
        handler: () => {
          console.log('Agree clicked');
          this.patientProfileService.deletePatientProfile(id)
          .subscribe( (res: any) => {
            this.ionViewWillEnter();
          }, ( err) => {
              console.log(err);
          });
        }
      }]
    });

    await alert.present();

  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


}
