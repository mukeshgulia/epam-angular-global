import { Directive } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  ValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

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
  constructor() {
    this.validator = this.dateValidator();
  }

  public validate(c: FormControl): ValidationErrors | null {
    return this.validator(c);
  }

  public dateValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value !== null && control.value !== '') {
        const isValid = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(
          control.value
        );
        if (isValid) {
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
}
