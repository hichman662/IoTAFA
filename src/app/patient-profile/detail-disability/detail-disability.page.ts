import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
import {  LoadingController } from '@ionic/angular';

import { Disability } from 'src/app/models/disability.model';

@Component({
  selector: 'app-detail-disability',
  templateUrl: './detail-disability.page.html',
  styleUrls: ['./detail-disability.page.scss'],
})
export class DetailDisabilityPage implements OnInit {

  segmentModel = "features";
  public arrayIsEmpty = false;
  public disability: Disability[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private patientProfileService: PatientProfileService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.patientProfileService.getDisabilityById(this.idPassedByURL).subscribe((res: any ) => {
     console.log(res);
     this.disability = res;
    }, (err) => {
      console.log(err);
    });
    }
    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }

}
