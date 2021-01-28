import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-device-template-telemetry-component',
  templateUrl: './device-template-telemetry.component.html',
  styleUrls: ['./device-template-telemetry.component.scss'],
})
export class DeviceTemplateTelemetryComponent implements OnInit {

   telemetryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.telemetryForm = this.fb.group({
      telemetries: this.fb.array([]) ,
    });
  }

  ngOnInit() {}

telemetries(): FormArray {
  return this.telemetryForm.get("telemetries") as FormArray;
}

  addTelemetry() {
    this.telemetries().push(this.newTelemetry());
  }

  newTelemetry(): FormGroup {
    return this.fb.group({
      frecuency: '',
      unit: '',
      schema: ''
    });
  }

  removeTelemetry(i: number) {
    this.telemetries().removeAt(i);
  }

  onSubmit() {
    console.log(this.telemetryForm.value);
  }

}
