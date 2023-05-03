import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { IAnswers } from '../model/form.model';

@Component({
  selector: 'app-form-answers',
  templateUrl: './form-answers.component.html',
  styleUrls: ['./form-answers.component.scss']
})
export class FormAnswersComponent {
  public formState: IAnswers[] = this.__formService.formState as IAnswers[];
  constructor(private __formService: FormService) { }
}
