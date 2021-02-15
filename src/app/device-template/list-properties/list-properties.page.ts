import { Property } from './../../models/property.model';
import { Component, OnInit } from '@angular/core';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.page.html',
  styleUrls: ['./list-properties.page.scss'],
})
export class ListPropertiesPage implements OnInit {

  public deviceTemplateProperties: Property[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    private deviceTemplateService: DeviceTemplateService
  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
      this.deviceTemplateProperties = res['Properties'];
    }, (err) => {
      console.log(err);
    });
    }
}
