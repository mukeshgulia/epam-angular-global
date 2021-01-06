import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { DateHelper } from '../shared/utils/date-helper';
import { DateValidatorDirective } from './directives/date.validator.directive';
import { NumberValidatorDirective } from './directives/number.validator.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    HighlightDirective,
    DateValidatorDirective,
    NumberValidatorDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
],
exports: [
  HighlightDirective,
  DateValidatorDirective,
  NumberValidatorDirective,
  DurationPipe,
  OrderByPipe,
  FilterPipe,
  TranslateModule
],
  providers: [DateHelper, FilterPipe],
})
export class SharedModule { }
