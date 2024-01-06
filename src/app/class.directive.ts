import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  constructor(private el: ElementRef) { }

  @Input('appClass') set classnames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.el.nativeElement.classList.add(key);
      } else {
        this.el.nativeElement.classList.remove(key);
      }
    }
  }
}