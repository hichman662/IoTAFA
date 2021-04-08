import { CareActivityService } from './../../services/careActivity.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, IonItemSliding } from '@ionic/angular';
import { CarePlanTemplateService } from 'src/app/services/carePlanTemplate.service';
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-component-goal',
  templateUrl: './component-goal.component.html',
  styleUrls: ['./component-goal.component.scss'],
})
export class ComponentGoalComponent implements OnInit {

  public arrayIsEmpty = false;
  public goals: Goal[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    private carePlanTemplateService: CarePlanTemplateService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router

  ) { }


  ionViewWillEnter() {
    // tslint:disable-next-line: no-string-literal
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.carePlanTemplateService.getCarePlantemplateById(this.idPassedByURL)
    // tslint:disable-next-line: deprecation
    .subscribe((res: any ) => {
      // tslint:disable-next-line: no-string-literal
      this.goals = res['Goals'];
      if (this.goals.length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
}
   ngOnInit(): void {
     // tslint:disable-next-line: no-string-literal
     this.idPassedByURL = this.route.snapshot.params['Id'];
     this.carePlanTemplateService.getCarePlantemplateById(this.idPassedByURL)
     // tslint:disable-next-line: deprecation
     .subscribe((res: any ) => {
       // tslint:disable-next-line: no-string-literal
       this.goals = res['Goals'];
       if (this.goals.length === 0){
         this.arrayIsEmpty = true;
       }
     }, (err) => {
       console.log(err);
     });
    }
    async deleteGoal(slidingItem: IonItemSliding, id: number, name: string){
      slidingItem.close();
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove Goal',
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
           this.carePlanTemplateService.deleteGoal(id)
           // tslint:disable-next-line: deprecation
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
