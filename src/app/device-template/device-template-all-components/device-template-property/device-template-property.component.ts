import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DeviceTemplateService } from '../../../services/deviceTemplate.service';

@Component({
  selector: 'app-device-template-property-component',
  templateUrl: './device-template-property.component.html',
  styleUrls: ['./device-template-property.component.scss'],
})
export class DeviceTemplatePropertyComponent implements OnInit {

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
    })
  }

  ngOnInit() {}


  onSubmit(){
    console.log(this.propertyForm.value);
    this.deviceTemplateService.insertPropertyToArray(this.propertyForm.value);
    this.propertyForm.reset();
    this.router.navigate(['tabs/tab1/device-template/add-device-template']);
  }

}
