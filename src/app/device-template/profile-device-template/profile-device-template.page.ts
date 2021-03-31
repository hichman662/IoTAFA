import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { DeviceTemplate } from './../../models/deviceTemplate.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-device-template',
  templateUrl: './profile-device-template.page.html',
  styleUrls: ['./profile-device-template.page.scss'],
})
export class ProfileDeviceTemplatePage implements OnInit {
  
  segmentModel = "profile";
  public deviceTemplateProfile: DeviceTemplate[] = [];
  private idPassedByURL: number = null;
  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private deviceTemplateService: DeviceTemplateService
  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
      this.deviceTemplateProfile = res;
    }, (err) => {
      console.log(err);
    });
    }

    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }
}
