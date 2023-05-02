import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFormState, IOption } from '../../model/form.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BaseComponent } from 'src/app/utils/base/base.component';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-checklist-control',
  templateUrl: './checklist-control.component.html',
  styleUrls: ['./checklist-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistControlComponent extends BaseComponent implements OnInit {

  public otherAnswerControl: FormControl = new FormControl();
  @Input() question: string = '';
  @Input() config: IFormState = {};
  @Output() optionChanges = new EventEmitter<string[]>();
  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config'] && changes['config'].currentValue['otherValue']) {
      this.otherAnswerControl.setValue(changes['config'].currentValue['otherValue']);
    }
  }

  ngOnInit(): void {
    this.otherAnswerControl.valueChanges?.subscribe(value => {
      this.config['otherValue'] = `${value}`;
    })
  }

  optionChange(event: MatCheckboxChange, option: IOption) {
    let answers = this.config?.answers as string[] || [];
    if (event?.checked) {
      answers.push(option?.id || '');
    } else {
      let idx = answers?.findIndex(value => value === option?.id || '');
      if (idx >= 0) {
        answers.splice(idx, 1);
      }
      if (option?.id == 'other') {
        this.config['otherValue'] = '';
        this.otherAnswerControl.setValue('');
      }
    }

    this.config?.control?.setValue(answers);
  }
}
