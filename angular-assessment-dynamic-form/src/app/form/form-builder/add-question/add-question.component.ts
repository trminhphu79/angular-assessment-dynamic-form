import { Component, HostListener, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormService } from '../../services/form.service';
import { LIMIT_ANSWER, TypeQuestionEnum } from '../../model/form.model';
import { FormArray } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DEFAULT_SNACKBAR } from '../../model/snackbar.const';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {

  public reactiveForm: FormGroup = this.__fb.group(this.__formService.getDefaultAddQuestionForm());
  public typeQuestion: TypeQuestionEnum[] = [TypeQuestionEnum.checklist, TypeQuestionEnum.paragraph];
  public typeQuestionEnum = TypeQuestionEnum;
  public limitAnswer = LIMIT_ANSWER;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddQuestionComponent>,
    public __fb: FormBuilder,
    private __formService: FormService,
    private __snackBar: MatSnackBar
  ) { }


  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  @HostListener('window:keyup.enter') onEnter() {
    this.addAnotherAnswers();
  }

  get f_options() { return (this.reactiveForm.get('options') as FormArray) }

  typeChange(event: MatSelectChange) {
    switch (event.value) {
      case TypeQuestionEnum.checklist:
        this.reactiveForm.addControl('otherOption', new FormControl(true));
        break;
      case TypeQuestionEnum.paragraph:
        this.reactiveForm.removeControl('otherOption');
        break;
      default:
        return
    }
  }

  addAnotherAnswers() {
    this.f_options.push(this.__formService.getDefaultOption());
  }

  submit() {
    if (this.reactiveForm.invalid ||
      (this.f_options?.length == 0 && this.reactiveForm.value.type == TypeQuestionEnum.checklist)) {
      this.reactiveForm.markAllAsTouched();
      this.__snackBar.open("Please select at least one answer option", "", DEFAULT_SNACKBAR);
      return
    }
    const result = this.reactiveForm.value;

    if (result.options && result.options.length) {
      result.options = result.options.map((ite: any) => ({ id: ite + `__${Math.random().toString(16).slice(2)}`, title: ite }));

      if (result.otherOption) {
        result.options.push({ id: "other", title: 'other' });
      }
    };

    this.dialogRef.close(result);
  }
}
