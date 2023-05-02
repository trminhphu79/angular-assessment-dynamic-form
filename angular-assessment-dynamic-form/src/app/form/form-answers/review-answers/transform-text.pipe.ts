import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "transformText",
  pure: true
})
export class TransFormTextPipe implements PipeTransform {
  transform(value: string) {
    return value.split("__")[0] || ""
  }
}