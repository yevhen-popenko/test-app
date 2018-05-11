import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() isEdit = true;
  @Input() error: any;
  @Input() data;
  @Output() sendSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const preFilledData = this.data || { firstName: '', lastName: '', age: 0 };
    this.form = this.fb.group({
      firstName: [preFilledData.firstName, [Validators.required]],
      lastName: [preFilledData.lastName, Validators.required],
      age: preFilledData.age
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.sendSubmit.emit(this.form.value);
    }
  }
}
