import { AdaptationRequest } from './../../models/adaptationRequest.model';
import { AccessModeService } from './../../services/accessMode.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, IonItemSliding } from '@ionic/angular';


@Component({
  selector: 'app-component-adaption-request',
  templateUrl: './component-adaption-request.component.html',
  styleUrls: ['./component-adaption-request.component.scss'],
})
export class ComponentAdaptionRequestComponent implements OnInit {

  public arrayIsEmpty = false;
  public adaptationRequest: AdaptationRequest[] = [];
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
      this.adaptationRequest = res['AdaptationRequest'];
      if (this.adaptationRequest .length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
}
   ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.accessModeService.getAccessModeById(this.idPassedByURL).subscribe((res: any ) => {
      this.adaptationRequest = res['AdaptationRequest'];
    
      if (this.adaptationRequest .length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
    }
    async deleteAdaptationRequest(slidingItem: IonItemSliding, id: number){
      slidingItem.close();
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove adaptation request',
       message: `Are you sure you want remove this adaptation request?`,
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
           this.accessModeService.deleteAdaptationRequest(id)
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
