import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICheckList, TypeQuestionEnum } from '../../model/form.model';
import { Input } from '@angular/core';
import { BaseComponent } from 'src/app/utils/base/base.component';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewAnswersComponent extends BaseComponent {
  @Input() formState: ICheckList[] = [];
  typeQuestionEnum = TypeQuestionEnum;
  constructor() { super() }
}
