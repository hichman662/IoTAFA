import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, IonItemSliding } from '@ionic/angular';
import { Condition } from 'src/app/models/condition.model';


@Component({
  selector: 'app-component-condition',
  templateUrl: './component-condition.component.html',
  styleUrls: ['./component-condition.component.scss'],
})
export class ComponentConditionComponent implements OnInit {

  public arrayIsEmpty = false;
  public conditions: Condition[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    private patientProfileService: PatientProfileService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router

  ) { }


  ionViewWillEnter() {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.patientProfileService.getPatientProfileById(this.idPassedByURL).subscribe((res: any ) => {
      this.conditions = res['Condition'];
      if (this.conditions .length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
}
   ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.patientProfileService.getPatientProfileById(this.idPassedByURL).subscribe((res: any ) => {
      this.conditions  = res['Condition'];
      if (this.conditions .length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
    }
    async deleteCondition(slidingItem: IonItemSliding, id: number, name: string){
      slidingItem.close();
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove Condition',
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
           this.patientProfileService.deleteCondition(id)
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
