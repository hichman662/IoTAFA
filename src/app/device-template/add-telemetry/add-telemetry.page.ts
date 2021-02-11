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

  telemetryForm: FormGroup;

  constructor(
    private deviceTemplateService: DeviceTemplateService,
    private router: Router,
  ) {
    this.telemetryForm = new FormGroup({
      frecuency: new FormControl(''),
      schema: new FormControl(''),
      unit: new FormControl('')
    });
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.telemetryForm.value);
    this.deviceTemplateService.insertTelemetryToArray(this.telemetryForm.value);
    this.telemetryForm.reset();
    this.router.navigate(['']);
  }

}
