import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TelemetryService } from 'src/app/services/telemetry.service';


@Component({
  selector: 'app-device-template-telemetry-component',
  templateUrl: './device-template-telemetry.component.html',
  styleUrls: ['./device-template-telemetry.component.scss'],
})
export class DeviceTemplateTelemetryComponent implements OnInit {

telemetryForm: FormGroup;
form: any;

  constructor(
    private telemetryService: TelemetryService,
    private router: Router
  ) {
    this.telemetryForm = new FormGroup({
      frecuency: new FormControl(''),
      schema: new FormControl(''),
      unit: new FormControl('')
    })

  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.telemetryForm.value);
    this.telemetryService.insertTelemetryToArray(this.telemetryForm.value);
    this.telemetryForm.reset();
    this.router.navigate(['/add-device-template']);
  }



}
