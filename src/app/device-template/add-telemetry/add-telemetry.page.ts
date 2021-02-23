import { Telemetry } from './../../models/telemetry.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-telemetry',
  templateUrl: './add-telemetry.page.html',
  styleUrls: ['./add-telemetry.page.scss'],
})
export class AddTelemetryPage implements OnInit {

  arrayTelemetries: Telemetry [] = null;
  isArrayEmpty: boolean;
  telemetryForm: FormGroup;

  constructor(
    private deviceTemplateService: DeviceTemplateService,
    private router: Router,
    public alertController: AlertController
  ) {
    this.arrayTelemetries = [];
    this.telemetryForm = new FormGroup({
      frecuency: new FormControl('', [
        Validators.required
      ]),
      schema: new FormControl('', [
        Validators.required
      ]),
      unit: new FormControl('', [
        Validators.required
      ]),
    });
  }
  ngOnInit() {
  }

  async emptyArray() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Unsaved changes',
      message: 'Are you sure you want to cancel?',
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
          this.arrayTelemetries = [];
          this.router.navigateByUrl('tabs/tab1/device-template/add-device-template');
        }
      }]
    });

    await alert.present();
}
  onSubmit(){
    this.arrayTelemetries.push(this.telemetryForm.value);
    console.log(this.arrayTelemetries);
    this.telemetryForm.reset();
  }


}
