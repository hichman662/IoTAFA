import { TelemetryService } from './../../services/telemetry.service';
import { Component, OnInit } from '@angular/core';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Telemetry } from 'src/app/models/telemetry.model';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile-telemetry',
  templateUrl: './profile-telemetry.page.html',
  styleUrls: ['./profile-telemetry.page.scss'],
})
export class ProfileTelemetryPage implements OnInit {
  segmentModel = "profile";
  public arrayIsEmpty = false;
  public telemetry: Telemetry[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private telemetryService: TelemetryService,
    private router: Router

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.telemetryService.getTelemetryById(this.idPassedByURL).subscribe((res: any ) => {
      this.telemetry = res;
    }, (err) => {
      console.log(err);
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}

