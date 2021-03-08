import { Component, OnInit } from '@angular/core';
import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Command } from 'src/app/models/command.model';


@Component({
  selector: 'app-profile-command',
  templateUrl: './profile-command.page.html',
  styleUrls: ['./profile-command.page.scss'],
})
export class ProfileCommandPage implements OnInit {

  segmentModel = "profile";
  public arrayIsEmpty = false;
  public command: Command[] = [];
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
    this.deviceTemplateService.getCommandById(this.idPassedByURL).subscribe((res: any ) => {
     console.log(res);
     this.command = res;
    }, (err) => {
      console.log(err);
    });
    }
    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }
}
