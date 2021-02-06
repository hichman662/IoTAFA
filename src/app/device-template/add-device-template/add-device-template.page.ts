import { DeviceTemplateService } from './../../services/deviceTemplate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Telemetry } from '../../models/telemetry.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-device-template',
  templateUrl: './add-device-template.page.html',
  styleUrls: ['./add-device-template.page.scss'],
})
export class AddDeviceTemplatePage implements OnInit {

  deviceTemplateForm: FormGroup;
  telemetries: Telemetry [];
  constructor(
    private deviceTemplateService: DeviceTemplateService
  ) {
    this.telemetries = [];
    this.deviceTemplateForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      isEdge: new FormControl(true),
      type: new FormControl('', [
        Validators.required
      ])
    });
   }

   ngOnInit() {
      this.telemetries = this.deviceTemplateService.getArrayTelemetries();
      console.log('Here I Am Inside add: ');
      console.log(this.telemetries);
  }

  onSubmit(){
    console.log(this.deviceTemplateForm.value);
  }

}
