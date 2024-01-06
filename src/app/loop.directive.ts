import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoop]',
  standalone: true
})
export class LoopDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appLoop') set render(steps: number) {
    this.viewContainer.clear();

    for (let step = 0; step < steps; step++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: step
      });
    }
  }
}