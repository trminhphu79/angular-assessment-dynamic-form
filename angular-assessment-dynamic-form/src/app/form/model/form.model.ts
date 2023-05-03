import { FormControl } from "@angular/forms";

export enum TypeQuestionEnum {
  PARAGRAPH = 'Paragraph',
  CHECKLIST = 'Checklist',
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

export interface IAnswers extends IFormState {
  answers?: string[]
}