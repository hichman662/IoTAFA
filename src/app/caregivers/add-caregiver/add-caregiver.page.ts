import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-caregiver',
  templateUrl: './add-caregiver.page.html',
  styleUrls: ['./add-caregiver.page.scss'],
})
export class AddCaregiverPage implements OnInit {
  public myForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
