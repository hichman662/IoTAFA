import { DeviceTemplate } from './../../models/deviceTemplate.model';
import { Component, OnInit } from '@angular/core';
import { TelemetryService } from './../../services/telemetry.service';
import { Telemetry } from './../../models/telemetry.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add-telemetry-component',
  templateUrl: './add-telemetry-component.component.html',
  styleUrls: ['./add-telemetry-component.component.scss'],
})
export class AddTelemetryComponentComponent implements OnInit {

  telemetryForm: FormGroup;
  idDeviceTemplate: number;
  name = '';
  arrayTelemetries: Telemetry [] = [];

  constructor(
    private telemetryService: TelemetryService,
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {

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
    this.storage.get('idDeviceTemplate').then((val) => {
      console.log('I´m carrying id device template inside telemetry', val);
      this.telemetryForm.get('DeviceTemplate_oid').setValue(val);
      console.log(this.telemetryForm.value.DeviceTemplate_oid);
    });
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Telemetry ${this.name} has been added successfully`,
      buttons: [ 
      {
        text: 'Ok',
        handler: () => {
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
        this.arrayTelemetries.push(res);
        console.log('telemetry added');
        this.name = res['Name'];
        this.saveAlert();
      }, ( err ) => {
  
      });
    
    this.telemetryForm.reset();
  }

}


