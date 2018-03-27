import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
  form: FormGroup;
  @Input() isEdit: boolean = true;
  @Input() error: any;
  @Input() data;
  @Output() sendSubmit: EventEmitter<any> = new EventEmitter<any>();
  backendError = {};

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.min(2)]],
      lastName: ['', Validators.required],
      age: [0, [Validators.min(18), Validators.max(150)]],
    });
  }

  ngOnInit() {
    if (this.data) {
      this.form.setValue(this.data);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.sendSubmit.emit(this.form.value);
    }
  }
}
