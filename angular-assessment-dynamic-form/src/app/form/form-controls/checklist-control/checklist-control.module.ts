import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistControlComponent } from './checklist-control.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ChecklistControlComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ChecklistControlComponent
  ]
})
export class ChecklistControlModule { }
