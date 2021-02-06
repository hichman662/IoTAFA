import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { DeviceTemplateService } from '../../../services/deviceTemplate.service';

@Component({
  selector: 'app-device-template-command-component',
  templateUrl: './device-template-command.component.html',
  styleUrls: ['./device-template-command.component.scss'],
})
export class DeviceTemplateCommandComponent implements OnInit {
commandForm: FormGroup;

  constructor(
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
  ) { 
    this.commandForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      isSync: new FormControl(true)
    })
  }

  ngOnInit() {}

onSubmit() {
  console.log(this.commandForm.value);
  this.deviceTemplateService.insertCommandToArray(this.commandForm.value);
  this.commandForm.reset();
  this.router.navigate(['tabs/tab1/device-template/add-device-template']);
}

}
