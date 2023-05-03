import { Injectable } from "@angular/core";
import { IFormState, TypeQuestionEnum } from "../model/form.model";
import { FormArray, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class FormService {

  private __questionFormState$ = new BehaviorSubject<IFormState[]>([]);
  public getFormState$ = this.__questionFormState$.asObservable();

  get formState() { return this.__questionFormState$.getValue() }

  setFormState(newState: IFormState[]) {
    this.__questionFormState$.next(newState);
  }

  public reBuildForm(newFormState: IFormState) {
    let newConfigs = [...this.formState, newFormState];
    let newForm = newConfigs?.map(config => this.getNewQuestionForm(config));
    this.setFormState(newForm);
  }

  getDefaultAddQuestionForm() {
    return {
      type: [TypeQuestionEnum.CHECKLIST, [Validators.required]],
      isRequired: true,
      question: [[], [Validators.required]],
      options: new FormArray([]),
      otherOption: true
    }
  }

  getNewQuestionForm(config: IFormState): IFormState {
    return {
      id: config?.id || Math.random().toString(16).slice(2),
      question: config?.question || '',
      isRequired: !!config?.isRequired,
      type: config?.type || TypeQuestionEnum.CHECKLIST,
      answers: config?.answers || '',
      options: config?.options || [],
      control: config?.control || new FormControl(config?.answers || '', (config?.isRequired ? [Validators.required] : null)),
      otherOption: config?.otherOption || null,
      otherValue: config?.otherValue || ''
    }
  }

  getDefaultOption() {
    return new FormControl('', [Validators.required])
  }
}