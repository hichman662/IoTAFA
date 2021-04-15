import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, IonItemSliding } from '@ionic/angular';
import { CarePlanTemplateService } from 'src/app/services/carePlanTemplate.service';
import { Comunication } from 'src/app/models/Comunication.model';


@Component({
  selector: 'app-component-comunication',
  templateUrl: './component-comunication.component.html',
  styleUrls: ['./component-comunication.component.scss'],
})
export class ComponentComunicationComponent implements OnInit {

  public arrayIsEmpty = false;
  public comunicationes: Comunication[] = [];
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
      this.comunicationes = res['Comunication'];
      if (this.comunicationes.length === 0){
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
      this.comunicationes = res['Comunication'];
      if (this.comunicationes.length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
    }
    async deleteComunication(slidingItem: IonItemSliding, id: number, name: string){
   /*    slidingItem.close();
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove Comunication',
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
           this.carePlanTemplateService.deleteComunication(id)
           .subscribe( (res: any) => {
            this.ionViewWillEnter();
           }, ( err) => {
               console.log(err);
           });
         }
       }]
     });
      await alert.present(); */

   }

  closeSliding(slidingItem: IonItemSliding){
    slidingItem.close();
  }


}
