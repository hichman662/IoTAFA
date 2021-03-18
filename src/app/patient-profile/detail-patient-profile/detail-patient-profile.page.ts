import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/patientProfile.model';
import { Disability } from 'src/app/models/disability.model';

@Component({
  selector: 'app-detail-patient-profile',
  templateUrl: './detail-patient-profile.page.html',
  styleUrls: ['./detail-patient-profile.page.scss'],
})
export class DetailPatientProfilePage implements OnInit {

  
  segmentModel = "features";
  public patientProfile: PatientProfile[] = [];
  public disability: Disability[] = [];
  private idPassedByURL: number = null;
  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private patientProfileService: PatientProfileService
  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.patientProfileService.getPatientProfileById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
      this.patientProfile = res;
    
    }, (err) => {
      console.log(err);
    });
    }

    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }
}
