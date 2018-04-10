import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  form: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  age: FormControl;

  @Input() isEdit: boolean = true;
  @Input() error: any;
  @Input() data: any;
  @Output() sendSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    if (this.data) {
      this.form.setValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        age: this.data.age,
      });
    }
  }

  createForm() {
    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    });
  }

  createFormControls() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.age = new FormControl('', Validators.required);
  }

  onSubmit() {
    if (this.form.valid) {
      this.sendSubmit.emit(this.form.value);
    }
  }
}
