import { Condition } from './../../models/condition.model';
import { CarePlanTemplate } from './../../models/carePlanTemplate.model';
import { PatientProfileService } from './../../services/patientProfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/patientProfile.model';
import { Disability } from 'src/app/models/disability.model';
import { CarePlanTemplateService } from 'src/app/services/carePlanTemplate.service';

@Component({
  selector: 'app-detail-care-plan-template',
  templateUrl: './detail-care-plan-template.page.html',
  styleUrls: ['./detail-care-plan-template.page.scss'],
})
export class DetailCarePlanTemplatePage implements OnInit {


  segmentModel = 'details';
  segmentModel2 = 'profile';
  public carePlanTemplate: CarePlanTemplate[] = [];
  public patientProfile: PatientProfile;
  public conditions: Condition[] = [];
  private idPassedByURL: number = null;
  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private carePlanTemplateService: CarePlanTemplateService
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.carePlanTemplateService.getCarePlantemplateById(this.idPassedByURL)
    // tslint:disable-next-line: deprecation
    .subscribe((res: any ) => {
      console.log(res);
      this.carePlanTemplate = res;
      this.patientProfile = res['Patient'];
      this.conditions = res['AddressConditions'];

    }, (err) => {
      console.log(err);
    });
    }

    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }

}
