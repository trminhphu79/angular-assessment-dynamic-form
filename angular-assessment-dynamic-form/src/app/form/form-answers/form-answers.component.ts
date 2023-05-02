import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { ICheckList } from '../model/form.model';

@Component({
  selector: 'app-form-answers',
  templateUrl: './form-answers.component.html',
  styleUrls: ['./form-answers.component.scss']
})
export class FormAnswersComponent {
  public formState: ICheckList[] = this.__formService.formState as ICheckList[];
  constructor(private __formService: FormService) { }
}
