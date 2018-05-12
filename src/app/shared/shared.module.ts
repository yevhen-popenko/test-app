import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./form.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class SharedModule { }
