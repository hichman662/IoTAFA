import { DeviceTemplateService } from './../services/deviceTemplate.service';
import { Router } from '@angular/router';
import { IonItemSliding, AlertController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DeviceTemplate } from '../models/deviceTemplate.model';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.page.html',
  styleUrls: ['./patient-profile.page.scss'],
})
export class PatientProfilePage implements OnInit {

  public listDeviceTemplates: DeviceTemplate[] = [];
  constructor(
            private deviceTemplateService: DeviceTemplateService,
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
    this.deviceTemplateService.getAllDeviceTemplate()
    .subscribe( (res: any) => {
        this.listDeviceTemplates = res;
    }, ( err) => {
        console.log(err);
    });
}

  closeSliding(slidingItem: IonItemSliding){
    slidingItem.close();
  }

 async deleteDeviceTemplate(slidingItem: IonItemSliding, id: number, name: string){
    slidingItem.close();
    console.log(id);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Remove Device Template',
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
          this.deviceTemplateService.deleteDeviceTemplate(id)
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


}
