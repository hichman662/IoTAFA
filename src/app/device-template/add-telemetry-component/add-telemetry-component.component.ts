import { DeviceTemplate } from './../../models/deviceTemplate.model';
import { Component, OnInit } from '@angular/core';
import { TelemetryService } from './../../services/telemetry.service';
import { Telemetry } from './../../models/telemetry.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add-telemetry-component',
  templateUrl: './add-telemetry-component.component.html',
  styleUrls: ['./add-telemetry-component.component.scss'],
})
export class AddTelemetryComponentComponent implements OnInit {
  eventForm: FormGroup;
  locationForm: FormGroup;
  sensorForm: FormGroup;
  idTelemetryForm: FormGroup;
  rangeStateForm: FormGroup;
  telemetryForm: FormGroup;
  idDeviceTemplate: number;
  idTelemetry: number;

  name = '';
  arrayTelemetries: Telemetry [] = [];
  formNumber: number;
  constructor(
    private telemetryService: TelemetryService,
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage,
    private fb: FormBuilder
  ) {

    this.telemetryForm = new FormGroup({
      DeviceTemplate_oid: new FormControl(''),
      Name: new FormControl('', [
        Validators.required
      ]),
      Frecuency: new FormControl(0, [
        Validators.required
      ]),
      Schema: new FormControl(1, [
        Validators.required
      ]),
      Unit: new FormControl(1, [
        Validators.required
      ]),
      Type: new FormControl(1, [
        Validators.required
      ]),
    });

    this.idTelemetryForm = new FormGroup({
      Telemetry_oid: new FormControl()
    });

    this.eventForm = new FormGroup({
      Telemetry_oid: new FormControl(''),
      EvenetCommand_oid: new FormControl(0),
      Severity: new FormControl(1, [
        Validators.required
      ]),
    });

    this.locationForm = new FormGroup({
      Telemetry_oid: new FormArray([]),
      Latitude: new FormControl(0, [
        Validators.required
      ]),
      Longitude: new FormControl(0, [
        Validators.required
      ]),
      Altitude: new FormControl(0, [
        Validators.required
      ]),
    });

    this.sensorForm = new FormGroup({
      Telemetry_oid: new FormControl(),
      SensorType: new FormControl('', [
        Validators.required
      ])
    });

    this.rangeStateForm = new FormGroup({
      Telemetry_oid: new FormControl(''),
      SensorType: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void{
    this.storage.get('idDeviceTemplate').then((val) => {
    this.telemetryForm.get('DeviceTemplate_oid').setValue(val);
    });
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Well done! Telemetry ${this.name} has been added successfully, now you're able to add specific telemetry`,
      buttons: [
      {
        text: 'Ok',
        handler: () => {
          /* this.router.navigateByUrl('tabs/tab1/device-template/add-device-template'); */
        }
      }]
    });

    await alert.present();
  }

  onSubmit(){
    this.ngOnInit();
//if(type telemetry==location) --> creatTelemetryLocation
    this.telemetryService.createTelemetry(this.telemetryForm.value)
      .subscribe( (res: any) => {
        console.log(res);
        this.arrayTelemetries.push(res);
        this.name = res['Name'];
        this.idTelemetry = res['Id'];
        this.formNumber = res['Type'];
        this.idTelemetryForm.get('Telemetry_oid').setValue(this.idTelemetry);
        this.saveAlert();
      }, ( err ) => {

      });

    this.telemetryForm.reset();
  }

  locationSubmit(){
    console.log('id telemetry is: ' + this.idTelemetry);
    /* (this.locationForm.get('Telemetry_oid') as FormArray).push(this.idTelemetryForm);
    this.locationForm.get('Telemetry_oid').setValue(this.idTelemetry); */
    this.telemetryService.createLocationTelemetry(this.locationForm.value)
    .subscribe( (res: any) => {
      this.formNumber = 0;
      console.log('location telemetry: ' + res.values);
      this.saveLocationAlert();
    }, ( err ) => {

    });
  }
    async saveLocationAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'SUCCESS!',
        message: `Well done! Location telemetry has been added successfully`,
        buttons: [
        {
          text: 'Ok',
          handler: () => {
            /* this.router.navigateByUrl('tabs/tab1/device-template/add-device-template'); */
          }
        }]
      });

      await alert.present();
    }
  eventSubmit(){
    this.eventForm.get('Telemetry_oid').setValue(this.idTelemetry);
  }
  rangeStateSubmit(){}
  sensorSubmit(){
    this.sensorForm.get('Telemetry_oid').setValue(this.idTelemetry);
  }

}


