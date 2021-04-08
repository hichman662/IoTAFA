import { CarePlanTemplateService } from './../services/carePlanTemplate.service';
import { CarePlanTemplate } from './../models/carePlanTemplate.model';
import { DeviceTemplate } from './../models/deviceTemplate.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
import {  LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-care-plan-template',
  templateUrl: './care-plan-template.page.html',
  styleUrls: ['./care-plan-template.page.scss'],
})
export class CarePlanTemplatePage implements OnInit {

  public carePlanTemplates: CarePlanTemplate[] = [];

  constructor(
            private carePlanTemplateService: CarePlanTemplateService,
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
    this.carePlanTemplateService.getAllCarePlantemplate()
    // tslint:disable-next-line: deprecation
    .subscribe( (res: any) => {
        this.carePlanTemplates = res;
    }, ( err) => {
        console.log(err);
    });
}

  closeSliding(slidingItem: IonItemSliding){
    slidingItem.close();
  }

 async deleteCarePlanTemplate(slidingItem: IonItemSliding, id: number, name: string){
    slidingItem.close();
    console.log(id);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Remove Care Plan',
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
          this.carePlanTemplateService.deleteCarePlanTemplate(id)
          // tslint:disable-next-line: deprecation
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
