import { Component, OnInit } from '@angular/core';
import { Property } from './../../models/property.model';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-component-property',
  templateUrl: './component-property.component.html',
  styleUrls: ['./component-property.component.scss'],
})
export class ComponentPropertyComponent implements OnInit {
  
  public arrayIsEmpty = false;
  public deviceTemplateProperties: Property[] = [];
  private idPassedByURL: number = null;
  
  constructor(
    private route: ActivatedRoute,
    private deviceTemplateService: DeviceTemplateService) { }

     ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getDeviceTemplateById(this.idPassedByURL).subscribe((res: any ) => {
     console.log(res);
     this.deviceTemplateProperties = res['Properties'];
     if (this.deviceTemplateProperties.length === 0){
      this.arrayIsEmpty = true;
    }
    }, (err) => {
      console.log(err);
    });
    }


}
