import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface userFormData {
  firstName: string,
  lastName: string,
  age: number
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() isEdit: boolean = true;
  @Input() error: any;
  @Input() data: userFormData = { age: 0, firstName: '', lastName: '' };
  @Output() sendSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.form = this.fb.group({
      firstName: [this.data.firstName, [Validators.required]],
      lastName: [this.data.lastName, Validators.required],
      age: this.data.age,
    });
  }

  onSubmit() {
    if (this.form.valid){
      this.error = '';
      return this.sendSubmit.emit(this.form.value);
    }
    else
      this.error =
        Object
          .entries(this.form.controls)
          .filter(([, control]) => control.invalid)
          .map(([name, control]) => `${name} is : ${Object.keys(control.errors).join(', ')}`)

  }
}
