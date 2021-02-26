import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';
@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.page.html',
  styleUrls: ['./add-command.page.scss'],
})
export class AddCommandPage implements OnInit {

  commandForm: FormGroup;
  idDeviceTemplate: number;
  name = '';
  constructor(
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private route: ActivatedRoute
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

  ngOnInit():void {
    this.idDeviceTemplate = this.route.snapshot.params['Id'];
    this.commandForm.get('DeviceTemplate_oid').setValue(this.idDeviceTemplate);
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
