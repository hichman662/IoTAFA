import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Property } from 'src/app/models/property.model';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit{

  propertyForm: FormGroup;
  arrayProperties: Property [] = null;
  isArrayEmpty: boolean;
  nav: any;

  constructor(
    private storage: Storage,
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController
  ) {

    this.arrayProperties = [];
    this.propertyForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      isWritable: new FormControl(true),
      isCloudable: new FormControl(true),
      DeviceTemplate_oid: new FormControl(0)
    });
  }

  ngOnInit() {}

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
          this.arrayProperties = [];
          this.router.navigateByUrl('tabs/tab1/device-template/add-device-template');
        }
      }]
    });

    await alert.present();

}
  ionViewWillLeave(){
    this.storage.set('arrayProperties', this.arrayProperties);
    console.log(`I´m going Outside:` + this.storage);
  }

  onSubmit(){
    this.arrayProperties.push(this.propertyForm.value);
    console.log(this.propertyForm.value);
    this.propertyForm.setValue({name: 'Another property name', isCloudable: true, isWritable: true});
  }


}
