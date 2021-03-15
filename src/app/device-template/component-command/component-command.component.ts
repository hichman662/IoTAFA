import { Component, OnInit } from '@angular/core';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Command } from 'src/app/models/command.model';
@Component({
  selector: 'app-component-command',
  templateUrl: './component-command.component.html',
  styleUrls: ['./component-command.component.scss'],
})
export class ComponentCommandComponent implements OnInit {

  public arrayIsEmpty = false;
  public deviceTemplateCommands: Command[] = [];
  private idPassedByURL: number;
  constructor(
    private route: ActivatedRoute,
    private deviceTemplateService: DeviceTemplateService
  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL)
    .subscribe((res: any ) => {
      this.deviceTemplateCommands = res['Commands'];
      if (this.deviceTemplateCommands.length === 0){
        this.arrayIsEmpty = true;
      }
    }, (err) => {
      console.log(err);
    });
    }
    
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
