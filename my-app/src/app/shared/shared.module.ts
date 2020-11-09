import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { DateHelper } from '../shared/utils/date-helper';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
],
exports: [
  HighlightDirective,
  DurationPipe,
  OrderByPipe,
  FilterPipe
],
  providers: [DateHelper, FilterPipe],
})
export class SharedModule { }
