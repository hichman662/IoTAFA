import { AccessModeService } from './../../services/accessMode.service';
import { AccessMode } from './../../models/accessMode.model';
import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, IonItemSliding } from '@ionic/angular';


@Component({
  selector: 'app-component-access-mode',
  templateUrl: './component-access-mode.component.html',
  styleUrls: ['./component-access-mode.component.scss'],
})
export class ComponentAccessModeComponent implements OnInit {
  
  
  public arrayIsEmpty = false;
    public accessModes: AccessMode[] = [];
    private idPassedByURL: number = null;
    constructor(
      private route: ActivatedRoute,
      private patientProfileService: PatientProfileService,
      private accessModeService: AccessModeService,
      public alertController: AlertController,
      public loadingController: LoadingController,
      private router: Router
  
    ) { }
  
  
    ionViewWillEnter() {
      this.idPassedByURL = this.route.snapshot.params['Id'];
      this.patientProfileService.getPatientProfileById(this.idPassedByURL).subscribe((res: any ) => {
        this.accessModes = res['AccessMode'];
        if (this.accessModes .length === 0){
          this.arrayIsEmpty = true;
        }
      }, (err) => {
        console.log(err);
      });
  }
     ngOnInit(): void {
      this.idPassedByURL = this.route.snapshot.params['Id'];
      this.patientProfileService.getPatientProfileById(this.idPassedByURL).subscribe((res: any ) => {
        this.accessModes  = res['AccessMode'];
        if (this.accessModes .length === 0){
          this.arrayIsEmpty = true;
        }
      }, (err) => {
        console.log(err);
      });
      }
      async deleteAccessMode(slidingItem: IonItemSliding, id: number){
        slidingItem.close();
        console.log(id);
        const alert = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Remove Telemetry',
         message: `Are you sure you want remove the access mode?`,
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
             this.accessModeService.deleteAccessMode(id)
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
     
  
    closeSliding(slidingItem: IonItemSliding){
      slidingItem.close();
    }
  
}
