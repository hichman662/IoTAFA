import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Command } from 'src/app/models/command.model';


@Component({
  selector: 'app-edit-command',
  templateUrl: './edit-command.page.html',
  styleUrls: ['./edit-command.page.scss'],
})
export class EditCommandPage implements OnInit {

  segmentModel = "command";
  commandForm: FormGroup;
  name = '';
  private idPassedByURL: number = null;
  constructor(
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.commandForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      IsSynchronous: new FormControl(true)
    });
  }

  ngOnInit(){
    this.idPassedByURL = this.route.snapshot.params['IdCom'];
    this.deviceTemplateService.getCommandById(this.idPassedByURL).subscribe((res: any ) => {
    this.commandForm.get('name').setValue(res['Name']);
    this.commandForm.get('IsSynchronous').setValue(res['IsSynchronous']);
  }, (err) => {
    console.log(err);
  });
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `Command ${this.name} has been edited successfully`,
      buttons: [
      {
        text: 'Ok',
        handler: () => {
         /*  this.router.navigateByUrl('tabs/tab1/device-template/add-device-template'); */
        }
      }]
    });

    await alert.present();
}
onSubmit() {
  this.deviceTemplateService.updateCommand(this.idPassedByURL, this.commandForm.value)
  .subscribe( (res: any) => {
    console.log(res);
    console.log('Command edited');
    this.name = res['Name'];
    this.saveAlert();
  }, ( err ) => {

  });

}


segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}
}
