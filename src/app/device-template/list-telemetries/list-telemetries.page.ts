import { Component, OnInit } from '@angular/core';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Telemetry } from 'src/app/models/telemetry.model';
@Component({
  selector: 'app-list-telemetries',
  templateUrl: './list-telemetries.page.html',
  styleUrls: ['./list-telemetries.page.scss'],
})
export class ListTelemetriesPage implements OnInit {

  public deviceTemplateTelemetries: Telemetry[] = [];
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
      this.deviceTemplateTelemetries = res['Telemetries'];
    }, (err) => {
      console.log(err);
    });
    }
 }
