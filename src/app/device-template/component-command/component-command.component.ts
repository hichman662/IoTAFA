import { AlertController, IonItemSliding } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Command } from 'src/app/models/command.model';
@Component({
  selector: 'app-component-command',
  templateUrl: './component-command.component.html',
  styleUrls: ['./component-command.component.scss'],
})
export class ComponentCommandComponent implements OnInit {

  public arrayIsEmpty = false;
  public deviceTemplateCommands: Command[] = [];
  private idPassedByURL: number;
  constructor(
    private route: ActivatedRoute,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController
  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL)
    .subscribe((res: any ) => {
      this.deviceTemplateCommands = res['Commands'];
      if (this.deviceTemplateCommands.length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
    }

    ionViewWillEnter(){

    }

    closeSliding(slidingItem: IonItemSliding){
      slidingItem.close();
    }

    async deleteCommand(slidingItem: IonItemSliding , id: number, name: string){
      slidingItem.close();
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove Command',
       message: `Are you sure you want remove ${name}?`,
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
           this.deviceTemplateService.deleteCommand(id)
           .subscribe( (res: any) => {
             this.ionViewWillEnter();
           }, ( err) => {
               console.log(err);
           });
         }
       }]
     });
 
      await alert.present();
 
   }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
