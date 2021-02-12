import { Telemetry } from './../../models/telemetry.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';

@Component({
  selector: 'app-add-telemetry',
  templateUrl: './add-telemetry.page.html',
  styleUrls: ['./add-telemetry.page.scss'],
})
export class AddTelemetryPage implements OnInit {

  arrayTelemetries: Telemetry [];

  telemetryForm: FormGroup;

  constructor(
    private deviceTemplateService: DeviceTemplateService,
    private router: Router,
  ) {
    this.arrayTelemetries = [];
    this.telemetryForm = new FormGroup({
      frecuency: new FormControl('', [
        Validators.required
      ]),
      schema: new FormControl('', [
        Validators.required
      ]),
      unit: new FormControl('', [
        Validators.required
      ]),
    });
  }
  ngOnInit() {
  }

  onSubmit(){
    this.arrayTelemetries.push(this.telemetryForm.value);
    console.log(this.arrayTelemetries);
    this.telemetryForm.reset();
  }


}
