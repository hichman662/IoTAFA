import { TelemetryService } from './../../services/telemetry.service';
import { Telemetry } from './../../models/telemetry.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-telemetry',
  templateUrl: './edit-telemetry.page.html',
  styleUrls: ['./edit-telemetry.page.scss'],
})
export class EditTelemetryPage implements OnInit {
  segmentModel = "telemetry";
  telemetryForm: FormGroup;
  unit: number;
  schema: number;
  type: number;
  name = '';
  private idPassedByURL: number = null;
  constructor(
    private telemetryService: TelemetryService,
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute
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
    this.idPassedByURL = this.route.snapshot.params['IdTel'];
    this.telemetryService.getTelemetryById(this.idPassedByURL).subscribe((res: any ) => {
      this.telemetryForm.get('name').setValue(res['Name']);
    this.telemetryForm.get('frecuency').setValue(res['Frecuency']);
    this.unit = res['Unit'];
    this.schema = res ['Schema'];
    this.type = res ['Type'];
       /*
      this.deviceTemplateForm.get('isEdge').setValue(res['IsEdge']);
      this.typeDeviceTemplate = res['Type']; */

  }, (err) => {
    console.log(err);
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
    this.telemetryService.updateTelemetry(this.idPassedByURL, this.telemetryForm.value)
      .subscribe( (res: any) => {
        console.log(res);
        console.log('telemetry edited');
        this.name = res['Name'];
        this.saveAlert();
      }, ( err ) => {
  
      });
    
    this.telemetryForm.reset();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
