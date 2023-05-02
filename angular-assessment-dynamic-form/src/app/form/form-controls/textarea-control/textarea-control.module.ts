import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaControlComponent } from './textarea-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TextareaControlComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    TextareaControlComponent
  ]
})
export class TextareaControlModule { }
