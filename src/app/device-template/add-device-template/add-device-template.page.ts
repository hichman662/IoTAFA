import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TelemetryService } from 'src/app/services/telemetry.service';
import { Telemetry } from '../../models/telemetry.model';
@Component({
  selector: 'app-add-device-template',
  templateUrl: './add-device-template.page.html',
  styleUrls: ['./add-device-template.page.scss'],
})
export class AddDeviceTemplatePage implements OnInit {

  deviceTemplateForm: FormGroup;
  telemetries: Telemetry [];
  constructor(
    private telemetryService: TelemetryService
  ) {
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
     this.telemetryService.getAllTelemetries()
      .then(arr => {
        this.telemetries = arr;
      })
  }

  onSubmit(){
    console.log(this.deviceTemplateForm.value);
  }

}
