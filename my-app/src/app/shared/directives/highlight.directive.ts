import { AfterViewChecked, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Course } from 'src/app/core/services/course/model/course';
import { DateHelper } from '../../shared/utils/date-helper';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewChecked{

  @Input('appHighlight') public course: Course;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private dateHelper: DateHelper) { }

  public ngAfterViewChecked(): void {

    const courseDate: Date = this.course.creationDate;
    courseDate.setHours(0, 0, 0, 0);
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    const todayMinus14Days: Date = this.dateHelper.subtractDays(today, 14);
    todayMinus14Days.setHours(0, 0, 0, 0);

    if (courseDate < today && courseDate >= todayMinus14Days) {
      this.renderer.setStyle(this.element.nativeElement, 'border', `3px solid green`);

    } else if (courseDate > today) {
      this.renderer.setStyle(this.element.nativeElement, 'border', `3px solid blue`);
    }
  }
}
