import { DeviceTemplate } from './../models/deviceTemplate.model';
import { DeviceTemplateService } from './../services/deviceTemplate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-device-template',
  templateUrl: './device-template.page.html',
  styleUrls: ['./device-template.page.scss'],
})
export class DeviceTemplatePage implements OnInit {
  public listDeviceTemplates: DeviceTemplate[] = [];
  constructor(
            private deviceTemplateService : DeviceTemplateService,
            public alertController :AlertController
            ) {}

  ngOnInit():void {
    this.deviceTemplateService.getAllDeviceTemplate()
      .subscribe( (res : any) => {
          this.listDeviceTemplates = res;      
      },(err) => {
          console.log(err);
      });
  }

 async deleteDeviceTemplate(id : number, name: string){
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
          .subscribe( (res : any) => {
            window.location.reload();
          },(err) => {
              console.log(err);
          });
        }
      }]
    });

    await alert.present();

  }
 

}
