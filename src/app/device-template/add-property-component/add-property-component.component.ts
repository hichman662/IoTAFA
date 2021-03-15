import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add-property-component',
  templateUrl: './add-property-component.component.html',
  styleUrls: ['./add-property-component.component.scss'],
})
export class AddPropertyComponentComponent implements OnInit {

  idDeviceTemplate: number;
  propertyForm: FormGroup;
  name = '';
  constructor(
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {

    this.propertyForm = new FormGroup({
      DeviceTemplate_oid: new FormControl(),
      name: new FormControl('', [
        Validators.required
      ]),
      isWritable: new FormControl(true),
      isCloudable: new FormControl(true),
      Telemetries_oid: new FormControl(0)
    });
  }

  ngOnInit() {
    this.storage.get('idDeviceTemplate').then((val) => {
      console.log('I´m carrying id device template inside property', val);
      this.propertyForm.get('DeviceTemplate_oid').setValue(val);
      console.log(this.propertyForm.value.DeviceTemplate_oid);
    });
  }


  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Property ${this.name} has been added successfully`,
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
  ionViewWillLeave(){

  }

  onSubmit(){
    this.ngOnInit();
    this.deviceTemplateService.createProperty(this.propertyForm.value)
    .subscribe( (res: any) => {
      console.log(res);
      console.log('Property added');
      this.name = res['Name'];
      this.saveAlert();
    }, ( err ) => {

    });
    this.propertyForm.reset();
  }




}
