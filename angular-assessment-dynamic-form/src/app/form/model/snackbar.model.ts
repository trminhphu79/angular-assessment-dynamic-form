import { MatSnackBarConfig } from "@angular/material/snack-bar";


export enum HORIZONTAL_POSITION {
  CENTER = 'center'
}

export enum VERTICAL_POSITION {
  TOP = 'top'
}

export const DEFAULT_DURATION = 3000;

export const DEFAULT_SNACKBAR: MatSnackBarConfig = {
  duration: DEFAULT_DURATION,
  horizontalPosition: HORIZONTAL_POSITION.CENTER,
  verticalPosition: VERTICAL_POSITION.TOP,
  panelClass: "custom-snackbar"
}
