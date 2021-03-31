import { Property } from './../../models/property.model';
import { DeviceTemplate } from './../../models/deviceTemplate.model';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Telemetry } from '../../models/telemetry.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Device } from '@capacitor/core';


@Component({
  selector: 'app-add-device-template',
  templateUrl: './add-device-template.page.html',
  styleUrls: ['./add-device-template.page.scss'],
})
export class AddDeviceTemplatePage implements OnInit {

  // tslint:disable-next-line: ban-types
  segmentModel = "deviceTemplate";
  deviceOk = false;
  name = '';
  idDeviceTemplate: number;
  nameDeviceTemplate: '';
  deviceTemplateForm: FormGroup;
  deviceTemplate: DeviceTemplate ;

  constructor(
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.deviceTemplate = null;

    this.deviceTemplateForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      isEdge: new FormControl(true),
      type: new FormControl('', [
        Validators.required
      ]),
    });
   }

   ionViewWillEnter(){}

   ngOnInit() {}

   onSubmit(){
    this.deviceTemplate = this.deviceTemplateForm.value;
    this.deviceTemplateService.createDeviceTemplate(this.deviceTemplate)
    .subscribe( (res: any) => {
      this.name = this.deviceTemplateForm.get('name').value;
      this.idDeviceTemplate = res['Id'];
      console.log(this.idDeviceTemplate);
      this.nameDeviceTemplate = res['Name'];
      this.deviceOk = true;
      this.storage.set('idDeviceTemplate', this.idDeviceTemplate);

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
  this.storage.get('idDeviceTemplate').then((val) => {
    console.log('I´m carrying id device template', val);
  });
}

}
