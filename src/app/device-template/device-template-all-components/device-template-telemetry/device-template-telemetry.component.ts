import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-device-template-telemetry-component',
  templateUrl: './device-template-telemetry.component.html',
  styleUrls: ['./device-template-telemetry.component.scss'],
})
export class DeviceTemplateTelemetryComponent implements OnInit {

FormGroup: FormGroup;
form: any;

  constructor() {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      ArrayTelemetries: new FormArray([
      ])
    });
  }

addTelemetries(){
  this.form.get('ArrayTelemetries').push(new FormControl());
}

removeTelemetry(i: number) {
  this.form.get('ArrayTelemetries').removeAt(i);
}
onSubmit(){
 // console.log(this.form.get('arrayTelemetries').value);
  console.log(this.form.value);
}

}
