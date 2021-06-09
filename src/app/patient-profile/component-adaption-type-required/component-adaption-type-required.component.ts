import { AccessModeService } from './../../services/accessMode.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, IonItemSliding } from '@ionic/angular';
import { AdaptationTypeRequired } from 'src/app/models/adaptationTypeRequired.model';


@Component({
  selector: 'app-component-adaption-type-required',
  templateUrl: './component-adaption-type-required.component.html',
  styleUrls: ['./component-adaption-type-required.component.scss'],
})
export class ComponentAdaptionTypeRequiredComponent implements OnInit {

  public arrayIsEmpty = false;
  public adaptationTypeRequired: AdaptationTypeRequired[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    private accessModeService: AccessModeService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router

  ) { }


  ionViewWillEnter() {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.accessModeService.getAccessModeById(this.idPassedByURL).subscribe((res: any ) => {
      this.adaptationTypeRequired = res['AdaptationType'];
      if (this.adaptationTypeRequired .length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
}
   ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.accessModeService.getAccessModeById(this.idPassedByURL).subscribe((res: any ) => {
      this.adaptationTypeRequired = res['AdaptationType'];
      if (this.adaptationTypeRequired .length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
    }
    async deleteAdaptationTypeRequired(slidingItem: IonItemSliding, id: number){
      slidingItem.close();
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove adaptation type required',
       message: `Are you sure you want remove the adaptation type required?`,
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
           this.accessModeService.deleteAdaptationTypeRequired(id)
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
