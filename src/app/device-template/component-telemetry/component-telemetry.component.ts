import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../../services/telemetry.service';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Telemetry } from 'src/app/models/telemetry.model';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-component-telemetry',
  templateUrl: './component-telemetry.component.html',
  styleUrls: ['./component-telemetry.component.scss'],
})

export class ComponentTelemetryComponent implements OnInit {
  public arrayIsEmpty = false;
  public deviceTemplateTelemetries: Telemetry[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
  private deviceTemplateService: DeviceTemplateService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private telemetryService: TelemetryService,
    private router: Router

  ) { }
   ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL).subscribe((res: any ) => {
      this.deviceTemplateTelemetries = res['Telemetries'];
      if (this.deviceTemplateTelemetries.length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
    }
    async deleteTelemetry(id: number, name: string){
      console.log(id);
      const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Remove Telemetry',
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
           this.telemetryService.deleteTelemetry(id)
           .subscribe( (res: any) => {
             window.location.reload();
           }, ( err) => {
               console.log(err);
           });
         }
       }]
     });
      await alert.present();

   }
}

