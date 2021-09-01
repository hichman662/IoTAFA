import { CarePlanTemplateService } from './../services/carePlanTemplate.service';
import { PatientProfileService } from './../services/patientProfile.service';
import { DeviceTemplateService } from './../services/deviceTemplate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {
totalDeviceTemplate: number = 0;
totalPatientprofile: number = 0;
totalCarePlanTemplate: number = 0;
  constructor( private deviceTemplateService: DeviceTemplateService,
   private patientProfileService: PatientProfileService,
   private carePlanTemplateService: CarePlanTemplateService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // Device template
    this.deviceTemplateService.getAllDeviceTemplate()
    // tslint:disable-next-line: deprecation
    .subscribe( (res: any) => {
        this.totalDeviceTemplate = res.length;
    }, ( err) => {
        console.log(err);
    });
// patient profile 
    this.patientProfileService.getAllPatientProfile()
    .subscribe( (res: any) => {
        this.totalPatientprofile = res.length;
    }, ( err) => {
        console.log(err);
    });
    
// Care Plan Template
    this.carePlanTemplateService.getAllCarePlantemplate()
    // tslint:disable-next-line: deprecation
    .subscribe( (res: any) => {
        this.totalCarePlanTemplate = res.length;
    }, ( err) => {
        console.log(err);
    });
}
}
