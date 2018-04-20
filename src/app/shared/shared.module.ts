import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./form.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
  	ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class SharedModule { }
