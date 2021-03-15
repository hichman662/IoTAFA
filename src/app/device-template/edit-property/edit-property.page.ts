import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Command } from 'src/app/models/command.model';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.page.html',
  styleUrls: ['./edit-property.page.scss'],
})
export class EditPropertyPage implements OnInit {
  segmentModel = "command";
  idDeviceTemplate: number;
  propertyForm: FormGroup;
  name = '';
  private idPassedByURL: number = null;
  constructor(
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {

    this.propertyForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      isWritable: new FormControl(true),
      isCloudable: new FormControl(true)
    });
  }

  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params['IdPro'];
    this.deviceTemplateService.getPropertyById(this.idPassedByURL).subscribe((res: any ) => {
    this.propertyForm.get('name').setValue(res['Name']);
    this.propertyForm.get('isWritable').setValue(res['IsWritable']);
    this.propertyForm.get('isCloudable').setValue(res['IsCloudable']);
  }, (err) => {
    console.log(err);
  });
  }


  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Property ${this.name} has been edited successfully`,
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
    this.deviceTemplateService.updateProperty(this.idPassedByURL, this.propertyForm.value)
    .subscribe( (res: any) => {
      console.log(res);
      console.log('Property edited');
      this.name = res['Name'];
      this.saveAlert();
    }, ( err ) => {

    });
  }

segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}

}
