import { Telemetry } from './../../../models/telemetry.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DeviceTemplateService } from '../../../services/deviceTemplate.service';
@Component({
  selector: 'app-device-template-telemetry-component',
  templateUrl: './device-template-telemetry.component.html',
  styleUrls: ['./device-template-telemetry.component.scss'],
})
export class DeviceTemplateTelemetryComponent implements OnInit {

telemetryForm: FormGroup;

  constructor(
    private deviceTemplateService: DeviceTemplateService,
    private router: Router,
    
  ) {
    this.telemetryForm = new FormGroup({
      frecuency: new FormControl(''),
      schema: new FormControl(''),
      unit: new FormControl('')
    })

  }
  ngOnInit() {
  }

  
  onSubmit(){
    console.log(this.telemetryForm.value);
    this.deviceTemplateService.insertTelemetryToArray(this.telemetryForm.value);
    this.telemetryForm.reset();
    this.router.navigate(['tabs/tab1/device-template/add-device-template']);
  }



}
