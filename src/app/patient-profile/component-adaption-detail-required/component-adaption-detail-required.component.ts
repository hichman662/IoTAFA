import { AdaptationDetailRequired } from './../../models/adaptationDetailRequired.model';
import { AccessModeService } from './../../services/accessMode.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, IonItemSliding } from '@ionic/angular';


@Component({
  selector: 'app-component-adaption-detail-required',
  templateUrl: './component-adaption-detail-required.component.html',
  styleUrls: ['./component-adaption-detail-required.component.scss'],
})
export class ComponentAdaptionDetailRequiredComponent implements OnInit {

  public arrayIsEmpty = false;
  public adaptationDetailRequired: AdaptationDetailRequired[] = [];
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
      this.adaptationDetailRequired = res['AdaptationDetail'];
      if (this.adaptationDetailRequired .length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
}
   ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.accessModeService.getAccessModeById(this.idPassedByURL).subscribe((res: any ) => {
      this.adaptationDetailRequired = res['AdaptationDetail'];
      if (this.adaptationDetailRequired .length === 0){
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
       header: 'Remove adaptation detail required',
       message: `Are you sure you want remove the adaptation detail required?`,
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
           this.accessModeService.deleteAdaptationDetailRequired(id)
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
