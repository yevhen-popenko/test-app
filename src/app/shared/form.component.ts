import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent {
  form: FormGroup;
  @Input() isEdit: boolean = true;
  @Input() error: any;
  @Input() data;
  @Output() sendSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    let firstName = '';
    let lastName = '';
    let age = 0;

    if (this.data) {
      firstName = this.data.firstName;
      lastName = this.data.lastName;
      age = this.data.age;
    }

    this.form = this.fb.group({
      firstName: [firstName, [Validators.required]],
      lastName: [lastName, Validators.required],
      age: age,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.sendSubmit.emit(this.form.value);
    }
  }
}
