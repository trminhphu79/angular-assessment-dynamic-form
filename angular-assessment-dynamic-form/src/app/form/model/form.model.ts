import { FormControl } from "@angular/forms";

export enum TypeQuestionEnum {
  paragraph = 'paragraph',
  checklist = 'checklist',
}

export const LIMIT_ANSWER = 5;

export interface IFormState {
  id?: string | null;
  question?: string;
  isRequired?: boolean,
  type?: TypeQuestionEnum,
  answers?: string[] | string,
  control?: FormControl,
  options?: IOption[];
  otherOption?: boolean | null;
  otherValue?: string;
}

export interface IOption {
  title?: string,
  id?: string;
}

export interface ICheckList extends IFormState {
  answers?: string[]
}