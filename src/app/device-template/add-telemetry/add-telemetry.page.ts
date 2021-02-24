import { TelemetryService } from './../../services/telemetry.service';
import { Telemetry } from './../../models/telemetry.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
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
  idDeviceTemplate: number;
  
  constructor(
    private telemetryService: TelemetryService,
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute
  ) {
    this.arrayTelemetries = [];
    this.telemetryForm = new FormGroup({
      DeviceTemplate_oid: new FormControl(),
      name: new FormControl('', [
        Validators.required
      ]),
      frecuency: new FormControl('', [
        Validators.required
      ]),
      schema: new FormControl('', [
        Validators.required
      ]),
      unit: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('', [
        Validators.required
      ]),
    });
  }
  ngOnInit(): void{
    this.idDeviceTemplate = this.route.snapshot.params['Id'];
    this.telemetryForm.get('DeviceTemplate_oid').setValue(this.idDeviceTemplate);
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
    this.telemetryService.createTelemetry(this.telemetryForm.value)
      .subscribe( (res: any) => {
        console.log(res);
        console.log('telemetry added');
      }, ( err ) => {
  
      });
    this.arrayTelemetries.push(this.telemetryForm.value);
    console.log(this.arrayTelemetries);
    this.telemetryForm.reset();
  }


}
