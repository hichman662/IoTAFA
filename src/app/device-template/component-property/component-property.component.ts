import { IonItemSliding, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Property } from './../../models/property.model';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-component-property',
  templateUrl: './component-property.component.html',
  styleUrls: ['./component-property.component.scss'],
})
export class ComponentPropertyComponent implements OnInit {
  
  public arrayIsEmpty = false;
  public deviceTemplateProperties: Property[] = [];
  private idPassedByURL: number = null;
  
  constructor(
    private route: ActivatedRoute,
    private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController) { }

     ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL).subscribe((res: any ) => {
     console.log(res);
     this.deviceTemplateProperties = res['Properties'];
     if (this.deviceTemplateProperties.length === 0){
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

    async deleteProperty(slidingItem: IonItemSliding , id: number, name: string){
      slidingItem.close();
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove Property',
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
           this.deviceTemplateService.deleteProperty(id)
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


}
