import { AccessModeService } from './../../services/accessMode.service';
import { AccessMode } from './../../models/accessMode.model';
import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
import {  LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-detail-access-mode',
  templateUrl: './detail-access-mode.page.html',
  styleUrls: ['./detail-access-mode.page.scss'],
})
export class DetailAccessModePage implements OnInit {

  segmentModel = "features";
  public arrayIsEmpty = false;
  public accessMode: AccessMode[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private accessModeService: AccessModeService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.accessModeService.getAccessModeById(this.idPassedByURL).subscribe((res: any ) => {
     console.log(res);
     this.accessMode = res;
    }, (err) => {
      console.log(err);
    });
    }
    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }

}
