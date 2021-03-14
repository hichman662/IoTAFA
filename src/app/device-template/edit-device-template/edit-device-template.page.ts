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
  selector: 'app-edit-device-template',
  templateUrl: './edit-device-template.page.html',
  styleUrls: ['./edit-device-template.page.scss'],
})
export class EditDeviceTemplatePage implements OnInit {

  segmentModel = "deviceTemplate";
  deviceOk = false;
  name = '';
  idDeviceTemplate: number;
  nameDeviceTemplate: '';
  typeDeviceTemplate: number;
  deviceTemplateForm: FormGroup;
  deviceTemplate: DeviceTemplate ;
  private idPassedByURL: number = null;
  constructor(
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage,
    private route: ActivatedRoute,
  ) {

    this.deviceTemplate = null;

    this.deviceTemplateForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      isEdge: new FormControl(true),
      type: new FormControl(''),
    });
   }

   ionViewWillEnter(){}

   ngOnInit() {
        this.idPassedByURL = this.route.snapshot.params['IdTel'];
        this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL).subscribe((res: any ) => {
          this.deviceTemplateForm.get('name').setValue(res['Name']);
          this.deviceTemplateForm.get('isEdge').setValue(res['IsEdge']);
          this.typeDeviceTemplate = res['Type'];

      }, (err) => {
        console.log(err);
      });
    }

   onSubmit(){

     this.deviceTemplate = this.deviceTemplateForm.value;
     this.deviceTemplateService.updateDeviceTemplate(this.idPassedByURL, this.deviceTemplate)
      .subscribe( (res: any) => {
        console.log(res);
        this.name = res['Name'];

        this.presentAlert();
      }, ( err ) => {

      });

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.name} has been edited successfully`,
      buttons: [  {
        text: 'Ok',
        handler: () => {
         this.router.navigateByUrl('/tabs/tab1');
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




}
