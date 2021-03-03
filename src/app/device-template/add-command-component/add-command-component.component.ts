import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add-command-component',
  templateUrl: './add-command-component.component.html',
  styleUrls: ['./add-command-component.component.scss'],
})
export class AddCommandComponentComponent implements OnInit {

  commandForm: FormGroup;
  idDeviceTemplate: number;
  name = '';
  constructor(
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {
    this.commandForm = new FormGroup({
      DeviceTemplate_oid: new FormControl(),
      name: new FormControl('', [
        Validators.required
      ]),
      IsSynchronous: new FormControl(true),
      Telemetries_oid: new FormControl(0)
    });
  }

  ngOnInit(){
    this.storage.get('idDeviceTemplate').then((val) => {
      console.log('I´m carrying id device template inside Command', val);
      this.commandForm.get('DeviceTemplate_oid').setValue(val);
      console.log(this.commandForm.value.DeviceTemplate_oid);
    });
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Command ${this.name} has been added successfully`,
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
onSubmit() {
  this.deviceTemplateService.createCommand(this.commandForm.value)
  .subscribe( (res: any) => {
    console.log(res);
    console.log('Command added');
    this.name = res['Name'];
    this.saveAlert();
  }, ( err ) => {

  });

  this.commandForm.reset();
}

}
