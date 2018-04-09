import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./form.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,

    // need to import ReactiveFormsModule from @angular/forms here.
    // formGroup is a selector for directive named FormGroupDirective that is a part of ReactiveFormsModule,
    // hence the need to import it. It is used to bind an existing FormGroup to a DOM element.

    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class SharedModule { }
