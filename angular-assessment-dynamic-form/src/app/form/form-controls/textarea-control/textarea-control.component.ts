import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFormState } from '../../model/form.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TextareaControlComponent {
  public control: FormControl = new FormControl('');
  @Input() public config: IFormState = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config']) {
      this.control = this.config?.control || this.control;
    }
  }
}
