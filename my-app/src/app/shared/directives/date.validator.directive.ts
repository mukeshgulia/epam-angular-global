import { Directive } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  ValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: FormControl) => {
    if (control.value !== null && control.value !== '') {
      const isValidDateOnly = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(
        control.value
      );

      const isValid2DateWithTime = /^(\d{4}[- /.]\d{2}[- /.]\d{2}T\d{2}:\d{2}:\d{2})\+00:00$/.test(control.value);
      if (isValidDateOnly || isValid2DateWithTime) {
        return null;
      } else {
        return {
          datevalidator: { valid: false },
        };
      }
    } else {
      return null;
    }
  };
}


@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  public validator: ValidatorFn;

  public validate(control: FormControl): ValidationErrors | null {
    return dateValidator()(control);
  }
}
