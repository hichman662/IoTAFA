import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-device-template-command-component',
  templateUrl: './device-template-command.component.html',
  styleUrls: ['./device-template-command.component.scss'],
})
export class DeviceTemplateCommandComponent implements OnInit {
commandForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.commandForm = this.fb.group({
      ArrayCommands: this.fb.array([])
    });
  }

  ngOnInit() {}

  get commands(): FormArray {
    return this.commandForm.get(' ArrayCommands ') as FormArray;
  }

  newCommand(): FormGroup {
    return this.fb.group({
      name: '',
      isSyn: false,
    });
  }

  addCommands() {
    this.commands.push(this.newCommand());
 }

 removeCommand(i: number) {
  this.commands.removeAt(i);
}
onSubmit() {
  console.log(this.commandForm.value);
}

}
