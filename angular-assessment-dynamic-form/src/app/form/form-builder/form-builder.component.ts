import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormService } from '../services/form.service';
import { IFormState, TypeQuestionEnum } from '../model/form.model';
import { FormGroup } from '@angular/forms';
import { Subscription, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/utils/base/base.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DEFAULT_SNACKBAR } from '../model/snackbar.const';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent extends BaseComponent {

  public formState: IFormState[] = this.__formService.formState;
  public reactiveForm = new FormGroup<any>([]);
  public typeQuestionEnum = TypeQuestionEnum;
  private __subscriptions: Subscription[] = [];

  constructor(
    private __dialog: MatDialog,
    private __formService: FormService,
    private __router: Router,
    private snackbar: MatSnackBar
  ) {
    super();
  }

  ngOnInit() {
    this.__refreshForm(this.formState);
  }

  ngAfterViewInit() {
    this.registerCoreLayer();
  }

  override registerCoreLayer() {
    this.__formService.getFormState$.pipe(takeUntil(this.destroy$)).subscribe((res) => this.formState = res);
  }

  addNewQuestion() {
    let configs: MatDialogConfig = {
      width: '640px',
      panelClass: "mat-dialog-add-question",
      disableClose: true,
      data: {
        title: "ADD A NEW QUESTIONS"
      }
    }

    let dialogRef = this.__dialog.open(AddQuestionComponent, configs).afterClosed();
    dialogRef.subscribe({
      next: (result) => {
        this.__formService.reBuildForm(result);
        this.__refreshForm(this.formState);
      },
      error: (err) => {
        throw err
      }
    })
  }

  public reviewAnswers() {
    if (this.reactiveForm.invalid || this.formState.some((ite) => (ite.answers?.includes('other') && !ite.otherValue) && ite.answers.length == 1)) {
      this.snackbar.open("Please enter full information!!", '', DEFAULT_SNACKBAR);
      this.reactiveForm.markAllAsTouched();
      return;
    }
    this.__router.navigateByUrl('/form/answers');
  }

  private __refreshForm(configs: IFormState[]) {
    this.reactiveForm = new FormGroup([]);
    this.__clearSubscription();

    configs.forEach(config => {
      this.reactiveForm.addControl((config?.id || ''), config.control);
      let subscription = (config?.control?.valueChanges?.subscribe((value => config['answers'] = value)) as Subscription);
      this.__subscriptions.push(subscription);
    })
  }

  private __clearSubscription() {
    this.__subscriptions.forEach((sub) => sub.unsubscribe());
    this.__subscriptions = [];
  }
}
