import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAnswersComponent } from './form-answers.component';
import { ReviewAnswersComponent } from './review-answers/review-answers.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { TransFormTextPipe } from './review-answers/transform-text.pipe';

const routes: Routes = [{ path: "", component: FormAnswersComponent }];

@NgModule({
  declarations: [
    FormAnswersComponent,
    ReviewAnswersComponent,
    TransFormTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatListModule,
  ]
})
export class FormReviewAnswersModule { }
