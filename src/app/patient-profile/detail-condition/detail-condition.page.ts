import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
import {  LoadingController } from '@ionic/angular';
import { Condition } from 'src/app/models/condition.model';

@Component({
  selector: 'app-detail-condition',
  templateUrl: './detail-condition.page.html',
  styleUrls: ['./detail-condition.page.scss'],
})
export class DetailConditionPage implements OnInit {

  segmentModel = "features";
  public arrayIsEmpty = false;
  public condition: Condition[] = [];
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
    this.patientProfileService.getConditionById(this.idPassedByURL).subscribe((res: any ) => {
     console.log(res);
     this.condition = res;
    }, (err) => {
      console.log(err);
    });
    }
    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }
}
