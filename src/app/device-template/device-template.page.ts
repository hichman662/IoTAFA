import { DeviceTemplate } from './../models/deviceTemplate.model';
import { DeviceTemplateService } from './../services/deviceTemplate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-device-template',
  templateUrl: './device-template.page.html',
  styleUrls: ['./device-template.page.scss'],
})
export class DeviceTemplatePage implements OnInit {
  public listDeviceTemplates: DeviceTemplate[] = [];
  constructor(
            private deviceTemplateService : DeviceTemplateService) {}

  ngOnInit():void {
    this.deviceTemplateService.getAllDeviceTemplate()
      .subscribe( (res : any) => {
          this.listDeviceTemplates = res;      
      },(err) => {
          console.log(err);
      });
  }
 

}
