import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
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
  
  idDeviceTemplate: number;
  propertyForm: FormGroup;
  name = '';
  constructor(
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private route: ActivatedRoute
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

  ngOnInit():void {
    this.idDeviceTemplate = this.route.snapshot.params['Id'];
    this.propertyForm.get('DeviceTemplate_oid').setValue(this.idDeviceTemplate);
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
          this.router.navigateByUrl('tabs/tab1/device-template/add-device-template');
        }
      }]
    });

    await alert.present();
}
  ionViewWillLeave(){
    
  }

  onSubmit(){
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
