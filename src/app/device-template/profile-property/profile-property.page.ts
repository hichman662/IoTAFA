import { Component, OnInit } from '@angular/core';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-profile-property',
  templateUrl: './profile-property.page.html',
  styleUrls: ['./profile-property.page.scss'],
})
export class ProfilePropertyPage implements OnInit {

  segmentModel = "profile";
  public arrayIsEmpty = false;
  public property: Property[] = [];
  private idPassedByURL: number = null;
  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private deviceTemplateService: DeviceTemplateService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.idPassedByURL = this.route.snapshot.params['Id'];
    this.deviceTemplateService.getPropertyById(this.idPassedByURL).subscribe((res: any ) => {
     console.log(res);
     this.property = res;
    }, (err) => {
      console.log(err);
    });
    }
    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }
}
