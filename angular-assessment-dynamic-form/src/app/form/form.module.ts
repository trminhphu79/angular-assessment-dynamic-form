import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RouterModule, Routes } from '@angular/router';


const router: Routes = [
  {
    path: "",
    component: FormComponent,
    children: [
      {
        path: "",
        redirectTo: "builder",
        pathMatch: "full"
      },
      {
        path: "builder",
        loadChildren: () => import('./form-builder/form-builder.module').then((m) => m.FormBuilderModule)
      },
      {
        path: "answers",
        loadChildren: () => import('./form-answers/form-answers.module').then((m) => m.FormReviewAnswersModule)
      }
    ]
  },

]

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class FormModule { }
