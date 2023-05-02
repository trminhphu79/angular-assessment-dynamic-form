import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TextareaControlModule } from '../form-controls/textarea-control/textarea-control.module';
import { ChecklistControlModule } from '../form-controls/checklist-control/checklist-control.module';

const routes: Routes = [
  {
    path: "",
    component: FormBuilderComponent
  }
]
@NgModule({
  declarations: [
    FormBuilderComponent,
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    TextareaControlModule,
    ChecklistControlModule,
    MatSnackBarModule
  ]
})
export class FormBuilderModule { }
