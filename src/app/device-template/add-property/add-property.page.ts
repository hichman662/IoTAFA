import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { DeviceTemplateService } from '../../services/deviceTemplate.service';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {

  propertyForm: FormGroup;

  constructor(
    private router: Router,
    private deviceTemplateService: DeviceTemplateService,
  ) {
        this.propertyForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      isWritable: new FormControl(true),
      isCloudable: new FormControl(true)
    });
  }

  ngOnInit() {}


  onSubmit(){
    console.log(this.propertyForm.value);
    this.deviceTemplateService.insertPropertyToArray(this.propertyForm.value);
    this.propertyForm.reset();
    this.router.navigate(['']);
  }

}
