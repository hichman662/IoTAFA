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
  imOk = false;
  name = '';
  idDeviceTemplate: number;
  deviceTemplateForm: FormGroup;
  telemetries: Telemetry [];
  properties: Property [];
  deviceTemplate: DeviceTemplate ;
  constructor(
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.telemetries = [];
    this.properties = [];
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

   ionViewWillEnter(){
    this.storage.get('arrayProperties').then((val) => {
      console.log('I´m carrying properties', val);
      this.properties.push(val);
      console.log(this.properties);
    });
  }

   ngOnInit() {

  }

   onSubmit(){
    this.deviceTemplate = this.deviceTemplateForm.value;
    this.deviceTemplateService.createDeviceTemplate(this.deviceTemplate)
    .subscribe( (res: any) => {
      this.name = this.deviceTemplateForm.get('name').value;
      this.idDeviceTemplate = res['id'];
      this.imOk = true;
      this.presentAlert();
    }, ( err ) => {

    });
  }

/*   this.storage.set('DeviceTemplate_oid', this.idDeviceTemplate);
      this.storage.get('arrayProperties').then((val) => {
        console.log('I´m carrying properties', val);
        this.properties.push(val); */

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.name} has been added successfully`,
      buttons: [  {
        text: 'Return',
        handler: () => {
          this.router.navigateByUrl('/tabs/tab1/device-template');
        }
      },
      {
        text: 'Add another Device Template',
        handler: () => {
         this.deviceTemplateForm.reset();
        }
      }
      ]
    });

    await alert.present();
  }

}
