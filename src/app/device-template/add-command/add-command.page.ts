import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';
@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.page.html',
  styleUrls: ['./add-command.page.scss'],
})
export class AddCommandPage implements OnInit {

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
    });
  }

  ngOnInit() {}

onSubmit() {
  console.log(this.commandForm.value);
  this.deviceTemplateService.insertCommandToArray(this.commandForm.value);
  this.commandForm.reset();
  this.router.navigate(['']);
}

}
