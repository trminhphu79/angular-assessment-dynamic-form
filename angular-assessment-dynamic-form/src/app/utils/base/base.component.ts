import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
  protected destroy$ = new Subject<void>();

  isLoading = false;

  constructor() { }

  registerCoreLayer() { }

  trackByFn(index: number) {
    return index;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
